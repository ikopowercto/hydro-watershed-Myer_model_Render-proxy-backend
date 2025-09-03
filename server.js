import express from "express";
import fetch from "node-fetch";

const app = express();

app.get("/stations", async (req, res) => {
  try {
    const target =
      "https://hubeau.eaufrance.fr/api/v2/hydrometrie/stations?" +
      new URLSearchParams(req.query);
    const r = await fetch(target);
    const data = await r.json();
    res.set("Access-Control-Allow-Origin", "*");
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/obs", async (req, res) => {
  try {
    const target =
      "https://hubeau.eaufrance.fr/api/v2/hydrometrie/obs_elab?" +
      new URLSearchParams(req.query);
    const r = await fetch(target);
    const data = await r.json();
    res.set("Access-Control-Allow-Origin", "*");
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("✅ Proxy Hubeau lancé sur port " + PORT));
