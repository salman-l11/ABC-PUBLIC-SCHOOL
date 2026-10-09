import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import db from "./db.js";

const app = express();
const PORT = 3000;

app.use(express.json());


// ===============================
// GET ALL ENQUIRIES
// ===============================

app.get("/api/enquiries", async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM enquiries ORDER BY created_at DESC"
    );

    res.json({
      success: true,
      count: Array.isArray(rows) ? rows.length : 0,
      data: rows,
    });

  } catch (error) {
    console.error("Get enquiries error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch enquiries",
    });
  }
});


// ===============================
// ADD NEW ENQUIRY
// ===============================

app.post("/api/enquiries", async (req, res) => {

  try {

    const {
      parentName,
      studentName,
      gradeSeeking,
      phone,
      email,
      address,
      preferredTime,
      message,
    } = req.body;


    // Required fields check

    if (
      !parentName ||
      !phone ||
      !studentName ||
      !gradeSeeking
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Please provide parent name, student name, phone number, and grade.",
      });
    }


    // Generate enquiry ID

    const enquiryId = `ENQ-${Date.now()}`;


    // Insert into MySQL

    const [result] = await db.execute(
      `
      INSERT INTO enquiries
      (
        enquiry_id,
        parent_name,
        student_name,
        grade_seeking,
        phone,
        email,
        address,
        preferred_time,
        message,
        status,
        notes
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      [
        enquiryId,
        parentName,
        studentName,
        gradeSeeking,
        phone,
        email || "N/A",
        address || "N/A",
        preferredTime || "Anytime",
        message || "",
        "new",
        "",
      ]
    );


    console.log(
      `[New Enquiry] ${enquiryId} - ${parentName}`
    );


    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully!",
      data: {
        enquiryId,
        parentName,
        studentName,
        gradeSeeking,
        phone,
        email,
        address,
        preferredTime,
        message,
      },
    });

  } catch (error) {

    console.error("Create enquiry error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to submit enquiry",
    });

  }

});


// ===============================
// UPDATE ENQUIRY
// ===============================

app.patch("/api/enquiries/:id", async (req, res) => {

  try {

    const { id } = req.params;
    const { status, notes } = req.body;


    const [result] = await db.execute(
      `
      UPDATE enquiries
      SET
        status = COALESCE(?, status),
        notes = COALESCE(?, notes)
      WHERE enquiry_id = ?
      `,
      [
        status || null,
        notes !== undefined ? notes : null,
        id,
      ]
    );


    const updateResult = result as any;


    if (updateResult.affectedRows === 0) {

      return res.status(404).json({
        success: false,
        message: "Enquiry not found.",
      });

    }


    const [rows] = await db.execute(
      "SELECT * FROM enquiries WHERE enquiry_id = ?",
      [id]
    );


    res.json({
      success: true,
      message: "Enquiry updated.",
      data: Array.isArray(rows) ? rows[0] : null,
    });

  } catch (error) {

    console.error("Update enquiry error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to update enquiry",
    });

  }

});


// ===============================
// DELETE ENQUIRY
// ===============================

app.delete("/api/enquiries/:id", async (req, res) => {

  try {

    const { id } = req.params;


    const [result] = await db.execute(
      "DELETE FROM enquiries WHERE enquiry_id = ?",
      [id]
    );


    const deleteResult = result as any;


    if (deleteResult.affectedRows === 0) {

      return res.status(404).json({
        success: false,
        message: "Enquiry not found.",
      });

    }


    res.json({
      success: true,
      message: "Enquiry deleted successfully.",
    });

  } catch (error) {

    console.error("Delete enquiry error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to delete enquiry",
    });

  }

});


// ===============================
// VITE
// ===============================

async function startServer() {

  if (process.env.NODE_ENV !== "production") {

    const vite = await createViteServer({

      server: {
        middlewareMode: true,
      },

      appType: "spa",

    });

    app.use(vite.middlewares);

  } else {

    const distPath = path.join(
      process.cwd(),
      "dist"
    );

    app.use(express.static(distPath));

    app.get("*", (req, res) => {

      res.sendFile(
        path.join(
          distPath,
          "index.html"
        )
      );

    });

  }


  app.listen(PORT, "0.0.0.0", () => {

    console.log(
      `School App server running on http://localhost:${PORT}`
    );

  });

}

startServer();