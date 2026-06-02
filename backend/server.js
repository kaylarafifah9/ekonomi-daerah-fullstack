const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const multer = require('multer');
const csv = require('csv-parser');
const fs = require('fs');

const app = express();
const prisma = new PrismaClient();
const upload = multer({ dest: 'uploads/' });

app.use(cors());
app.use(express.json());

// PDRB
app.get('/pdrb', async (req, res) => {
    const data = await prisma.pDRB.findMany();
    res.json(data);
});
app.post('/pdrb', async (req, res) => {
    const { tahun, kabupaten, sektor, nilai_pdrb } = req.body;
    const data = await prisma.pDRB.create({
        data: { tahun: parseInt(tahun), kabupaten, sektor, nilai_pdrb: parseFloat(nilai_pdrb) }
    });
    res.json(data);
});
app.delete('/pdrb/:id', async (req, res) => {
    await prisma.pDRB.delete({ where: { id: parseInt(req.params.id) } });
    res.json({ message: 'Deleted' });
});
app.post('/pdrb/upload', upload.single('file'), (req, res) => {
    const results = [];
    fs.createReadStream(req.file.path).pipe(csv()).on('data', (data) => results.push(data)).on('end', async () => {
        for (const row of results) {
            await prisma.pDRB.create({ data: { tahun: parseInt(row.tahun), kabupaten: row.kabupaten, sektor: row.sektor, nilai_pdrb: parseFloat(row.nilai_pdrb) } });
        }
        fs.unlinkSync(req.file.path);
        res.json({ message: 'Upload berhasil', total: results.length });
    });
});

// KEMISKINAN
app.get('/kemiskinan', async (req, res) => {
    const data = await prisma.kemiskinan.findMany();
    res.json(data);
});
app.post('/kemiskinan', async (req, res) => {
    const { tahun, kabupaten, jumlah_miskin, persentase } = req.body;
    const data = await prisma.kemiskinan.create({
        data: { tahun: parseInt(tahun), kabupaten, jumlah_miskin: parseInt(jumlah_miskin), persentase: parseFloat(persentase) }
    });
    res.json(data);
});
app.delete('/kemiskinan/:id', async (req, res) => {
    await prisma.kemiskinan.delete({ where: { id: parseInt(req.params.id) } });
    res.json({ message: 'Deleted' });
});

// PENGANGGURAN
app.get('/pengangguran', async (req, res) => {
    const data = await prisma.pengangguran.findMany();
    res.json(data);
});
app.post('/pengangguran', async (req, res) => {
    const { tahun, kabupaten, tingkat_tpt } = req.body;
    const data = await prisma.pengangguran.create({
        data: { tahun: parseInt(tahun), kabupaten, tingkat_tpt: parseFloat(tingkat_tpt) }
    });
    res.json(data);
});
app.delete('/pengangguran/:id', async (req, res) => {
    await prisma.pengangguran.delete({ where: { id: parseInt(req.params.id) } });
    res.json({ message: 'Deleted' });
});
// UPLOAD CSV KEMISKINAN
app.post('/kemiskinan/upload', upload.single('file'), (req, res) => {
    const results = [];
    fs.createReadStream(req.file.path).pipe(csv()).on('data', (data) => results.push(data)).on('end', async () => {
        for (const row of results) {
            await prisma.kemiskinan.create({ data: { tahun: parseInt(row.tahun), kabupaten: row.kabupaten, jumlah_miskin: parseInt(row.jumlah_miskin), persentase: parseFloat(row.persentase) } });
        }
        fs.unlinkSync(req.file.path);
        res.json({ message: 'Upload berhasil', total: results.length });
    });
});

// UPLOAD CSV PENGANGGURAN
app.post('/pengangguran/upload', upload.single('file'), (req, res) => {
    const results = [];
    fs.createReadStream(req.file.path).pipe(csv()).on('data', (data) => results.push(data)).on('end', async () => {
        for (const row of results) {
            await prisma.pengangguran.create({ data: { tahun: parseInt(row.tahun), kabupaten: row.kabupaten, tingkat_tpt: parseFloat(row.tingkat_tpt) } });
        }
        fs.unlinkSync(req.file.path);
        res.json({ message: 'Upload berhasil', total: results.length });
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});