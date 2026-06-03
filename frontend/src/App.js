import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

const API = 'https://ekonomi-daerah-fullstack-production.up.railway.app';
const CREDENTIALS = { username: 'introdata_GA', password: 'Kayla_044' };

const colors = {
  primary: '#2563eb',     // biru elegan
  soft: '#eff6ff',
  sidebar: '#f8fafc',
  accent: '#60a5fa',
  text: '#1e293b',
  card: '#ffffff',
  border: '#cbd5e1',
};
const comparisonData = [
  {
    kabupaten: 'Blitar',
    pdrb: 150000,
    kemiskinan: 8.5,
    pengangguran: 4.2
  },
  {
    kabupaten: 'Malang',
    pdrb: 300000,
    kemiskinan: 7.2,
    pengangguran: 5.1
  },
  {
    kabupaten: 'Kediri',
    pdrb: 200000,
    kemiskinan: 9.1,
    pengangguran: 4.8
  },
  {
    kabupaten: 'Surabaya',
    pdrb: 500000,
    kemiskinan: 6.3,
    pengangguran: 6.3
  }
];
function LoginPage({ onLogin, onDosenLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === CREDENTIALS.username && password === CREDENTIALS.password) {
      onLogin();
    } else {
      setError('Username atau password salah!');
    }
  };

  return (
    <div style={{
      minHeight: '100vh', background: 'linear-gradient(135deg, #fce4ec, #f8bbd0, #fff0f5)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Segoe UI, Arial'
    }}>
      <div style={{
        background: 'white', borderRadius: '20px', padding: '48px 40px',
        boxShadow: '0 8px 32px rgba(37, 99, 235, 0.15)', width: '380px', textAlign: 'center'
      }}>
        <div style={{ fontSize: '48px', marginBottom: '8px' }}>📈</div>
        <h2 style={{ color: '#2563eb', margin: '0 0 4px' }}>Ekonomi Daerah</h2>
        <p style={{ color: '#1e293b', fontSize: '13px', marginBottom: '32px' }}>Sistem Informasi Ekonomi</p>

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '16px', textAlign: 'left' }}>
            <label style={{ fontSize: '13px', color: '#1e293b', fontWeight: 'bold', display: 'block', marginBottom: '6px' }}>Username</label>
            <input
              type="text" value={username} onChange={e => setUsername(e.target.value)}
              placeholder="Masukkan username"
              style={{
                width: '100%', padding: '12px', borderRadius: '10px',
                border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none',
                background: '#fff9fb', boxSizing: 'border-box'
              }}
              required
            />
          </div>
          <div style={{ marginBottom: '24px', textAlign: 'left' }}>
            <label style={{ fontSize: '13px', color: '#1e293b', fontWeight: 'bold', display: 'block', marginBottom: '6px' }}>Password</label>
            <input
              type="password" value={password} onChange={e => setPassword(e.target.value)}
              placeholder="Masukkan password"
              style={{
                width: '100%', padding: '12px', borderRadius: '10px',
                border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none',
                background: '#fff9fb', boxSizing: 'border-box'
              }}
              required
            />
          </div>
          {error && <p style={{ color: '#e53935', fontSize: '13px', marginBottom: '16px' }}>{error}</p>}
          <button type="submit" style={{
            width: '100%', padding: '14px', background: 'linear-gradient(135deg, #2563eb, #60a5fa)',
            color: 'white', border: 'none', borderRadius: '10px', fontSize: '16px',
            cursor: 'pointer', fontWeight: 'bold'
          }}>
            Login 🔐
          </button>
          <button
  type="button"
  onClick={onDosenLogin}
  style={{
    width: '100%',
    padding: '14px',
    marginTop: '12px',
    background: 'white',
    color: '#2563eb',
    border: '2px solid #2563eb',
    borderRadius: '10px',
    fontSize: '16px',
    cursor: 'pointer',
    fontWeight: 'bold'
  }}
>
  👨‍🏫 Login sebagai Dosen
</button>
        </form>
      </div>
    </div>
  );
}

function WelcomePage({ onStart, role }) {
  return (
    <div style={{
      minHeight: '100vh', background: 'linear-gradient(135deg, #2563eb, #60a5fa, #dbeafe)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Segoe UI, Arial'
    }}>
      <div style={{
        background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)',
        borderRadius: '24px', padding: '56px 48px', textAlign: 'center',
        border: '1px solid rgba(255,255,255,0.4)', maxWidth: '520px'
      }}>
        <div style={{ fontSize: '64px', marginBottom: '16px' }}>🎉</div>
        <h1 style={{
  color: 'white',
  fontSize: '28px',
  margin: '0 0 16px',
  fontWeight: 'bold'
}}>
  {role === 'dosen'
    ? 'Selamat Datang 👨‍🏫'
    : 'Selamat Anda Berhasil Login 🎉'}
</h1>

<div style={{
  background: 'rgba(255,255,255,0.12)',
  padding: '24px',
  borderRadius: '20px',
  marginTop: '20px',
  marginBottom: '30px',
  lineHeight: '1.8',
  color: 'white',
  maxWidth: '700px',
  marginLeft: 'auto',
  marginRight: 'auto'
}}>
  <p style={{ margin: 0, fontSize: '18px' }}>
    Website ini dirancang dan dibuat untuk memenuhi tugas proyek akhir mata kuliah
  </p>

  <h3 style={{
    marginTop: '15px',
    marginBottom: '10px',
    fontSize: '22px'
  }}>
    Introduction to Data Science for Economics
  </h3>

  <p style={{
    margin: '0 0 15px 0',
    fontSize: '18px',
    fontWeight: '600'
  }}>
    Kelas GA
  </p>

  <p style={{
    margin: 0,
    fontSize: '16px',
    opacity: 0.9
  }}>
    Disusun oleh
  </p>

  <h3 style={{
    marginTop: '10px',
    marginBottom: '5px',
    fontSize: '22px'
  }}>
    Kayla Rafifah Wijaya
  </h3>

  <p style={{
    margin: 0,
    fontSize: '18px'
  }}>
    245020400111044
          </p>
        </div>
        <button onClick={onStart} style={{
          padding: '16px 48px',
          background: 'white',
          color: '#2563eb',
          border: 'none',
          borderRadius: '50px',
          fontSize: '18px',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0 4px 16px rgba(0,0,0,0.15)'
        }}>
          ❤️ Start
        </button>
      </div>
    </div>
  );
}

function App() {
  const [authState, setAuthState] = useState('login');
  const [role, setRole] = useState('');
  const [page, setPage] = useState('overview');
  const [pdrb, setPdrb] = useState([]);
  const [kemiskinan, setKemiskinan] = useState([]);
  const [pengangguran, setPengangguran] = useState([]);
  const [formPdrb, setFormPdrb] = useState({ tahun: '', kabupaten: '', sektor: '', nilai_pdrb: '' });
  const [formKemiskinan, setFormKemiskinan] = useState({ tahun: '', kabupaten: '', jumlah_miskin: '', persentase: '' });
  const [formPengangguran, setFormPengangguran] = useState({ tahun: '', kabupaten: '', tingkat_tpt: '' });
  const [filterTahun, setFilterTahun] = useState('');
  const [filterKabupaten, setFilterKabupaten] = useState('');
  const [file, setFile] = useState(null);
  const [activeTable, setActiveTable] = useState('pdrb');

  const fetchAll = async () => {
    const [p, k, pg] = await Promise.all([
      axios.get(`${API}/pdrb`),
      axios.get(`${API}/kemiskinan`),
      axios.get(`${API}/pengangguran`)
    ]);
    setPdrb(p.data);
    setKemiskinan(k.data);
    setPengangguran(pg.data);
  };

  useEffect(() => { if (authState === 'dashboard') fetchAll(); }, [authState]);

  const handleDelete = async (type, id) => {
    if (window.confirm('Hapus data ini?')) {
      await axios.delete(`${API}/${type}/${id}`);
      fetchAll();
    }
  };

  const filterData = (data) => data.filter(d =>
    (filterTahun === '' || String(d.tahun) === filterTahun) &&
    (filterKabupaten === '' || d.kabupaten.toLowerCase().includes(filterKabupaten.toLowerCase()))
  );

  const tahunList = [...new Set([...pdrb, ...kemiskinan, ...pengangguran].map(d => d.tahun))];
  const kabupatenList = [...new Set([...pdrb, ...kemiskinan, ...pengangguran].map(d => d.kabupaten))];
  const totalPdrb = pdrb.reduce((a, b) => a + b.nilai_pdrb, 0);
  const avgKemiskinan = kemiskinan.length ? (kemiskinan.reduce((a, b) => a + b.persentase, 0) / kemiskinan.length).toFixed(1) : 0;
  const avgTPT = pengangguran.length ? (pengangguran.reduce((a, b) => a + b.tingkat_tpt, 0) / pengangguran.length).toFixed(1) : 0;
  const pdrbChartData = filterData(pdrb).map(item => ({
  ...item,
  label: `${item.kabupaten} (${item.tahun})`
}));

const kemiskinanChartData = filterData(kemiskinan).map(item => ({
  ...item,
  label: `${item.kabupaten} (${item.tahun})`
}));

const pengangguranChartData = filterData(pengangguran).map(item => ({
  ...item,
  label: `${item.kabupaten} (${item.tahun})`
}));
const selectedKabupaten =
  selectedKabupatenFilter === 'Semua Kabupaten'
    ? 'Malang'
    : selectedKabupatenFilter;

const pdrbData = pdrb
  .filter(item => item.kabupaten === selectedKabupaten)
  .sort((a, b) => a.tahun - b.tahun);

const kemiskinanData = kemiskinan
  .filter(item => item.kabupaten === selectedKabupaten)
  .sort((a, b) => a.tahun - b.tahun);

const pengangguranData = pengangguran
  .filter(item => item.kabupaten === selectedKabupaten)
  .sort((a, b) => a.tahun - b.tahun);

let insightText = '';

if (
  pdrbData.length > 1 &&
  kemiskinanData.length > 1 &&
  pengangguranData.length > 1
) {
  const awalPdrb = pdrbData[0];
  const akhirPdrb = pdrbData[pdrbData.length - 1];

  const awalKem = kemiskinanData[0];
  const akhirKem = kemiskinanData[kemiskinanData.length - 1];

  const awalPeng = pengangguranData[0];
  const akhirPeng = pengangguranData[pengangguranData.length - 1];

  insightText =
    `PDRB Kabupaten ${selectedKabupaten} meningkat dari ` +
    `${Number(awalPdrb.nilai_pdrb).toLocaleString('id-ID')} ` +
    `pada tahun ${awalPdrb.tahun} menjadi ` +
    `${Number(akhirPdrb.nilai_pdrb).toLocaleString('id-ID')} ` +
    `pada tahun ${akhirPdrb.tahun}. ` +
    `Pada periode yang sama tingkat kemiskinan menurun dari ` +
    `${awalKem.persentase}% menjadi ${akhirKem.persentase}% ` +
    `dan tingkat pengangguran menurun dari ` +
    `${awalPeng.tingkat_tpt}% menjadi ${akhirPeng.tingkat_tpt}%. ` +
    `Kondisi ini menunjukkan adanya perbaikan indikator ekonomi daerah selama periode pengamatan.`;
}
  if (authState === 'login')
  return (
    <LoginPage
      onLogin={() => {
        setRole('mahasiswa');
        setAuthState('welcome');
      }}
      onDosenLogin={() => {
  setRole('dosen');
  setAuthState('welcome');
}}
    />
  );
 if (authState === 'welcome')
  return (
    <WelcomePage
      role={role}
      onStart={() => setAuthState('dashboard')}
    />
  );

  const sidebarItems = [
  { id: 'overview', label: 'Overview', icon: '📊', group: 'DASHBOARD' },

  { id: 'pdrb', label: 'PDRB', icon: '🏛️', group: 'DATA' },
  { id: 'kemiskinan', label: 'Kemiskinan', icon: '👥', group: 'DATA' },
  { id: 'pengangguran', label: 'Pengangguran', icon: '💼', group: 'DATA' },

  { id: 'input', label: 'Input Manual', icon: '✏️', group: 'INPUT' },
  { id: 'upload', label: 'Upload CSV', icon: '⬆️', group: 'INPUT' },

  { id: 'tentang', label: 'Tentang Sistem', group: 'INFORMASI' },
  {
  id:'analisis',
  label:'Analisis',
  icon:'📈',
  group:'DASHBOARD'
},
];

  const inputStyle = {
    padding: '8px 12px', borderRadius: '8px', border: `1px solid ${colors.border}`,
    marginRight: '8px', marginBottom: '8px', fontSize: '14px', outline: 'none',
    background: '#fff9fb'
  };

  const btnPrimary = {
    background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
    color: 'white', border: 'none', padding: '8px 20px',
    borderRadius: '8px', cursor: 'pointer', fontSize: '14px'
  };

  const cardStyle = {
    background: colors.card, borderRadius: '12px', padding: '20px',
    border: `1px solid ${colors.border}`, boxShadow: '0 2px 8px rgba(233,30,140,0.08)'
  };

  const pageTitle = {
    overview: 'Overview Ekonomi Daerah',
    pdrb: '🏛️ Data PDRB',
    kemiskinan: '👥 Data Kemiskinan',
    pengangguran: '💼 Data Pengangguran',
    input: '✏️ Input Manual',
    upload: '⬆️ Upload CSV',
    tentang: 'ℹ️ Tentang Sistem',
    analisis: '📈 Analisis Data',
  };
  const exportCSV = (data, filename) => {
  if (!data.length) return;

  const csv =
    Object.keys(data[0]).join(",") +
    "\n" +
    data.map(row => Object.values(row).join(",")).join("\n");

  const blob = new Blob([csv], {
    type: "text/csv;charset=utf-8;"
  });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
};

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Segoe UI, Arial',background: '#f8fafc' }}>
      <div style={{ width: '240px', background: colors.sidebar, borderRight: `1px solid ${colors.border}`, padding: '20px 0', position: 'fixed', height: '100vh', overflowY: 'auto' }}>
        <div style={{ padding: '0 20px 20px', borderBottom: `1px solid ${colors.border}` }}>
          <div style={{ fontSize: '18px', fontWeight: 'bold', color: colors.primary }}>📊 Ekonomi Daerah</div>
          <div style={{ fontSize: '12px', color: '#1e293b' }}>Sistem Informasi</div>
        </div>
        {['DASHBOARD', 'DATA', 'INPUT'].map(group => (
          <div key={group} style={{ marginTop: '16px' }}>
            <div style={{ padding: '0 20px', fontSize: '11px', color: '#1e293b', fontWeight: 'bold', marginBottom: '4px' }}>{group}</div>
            {sidebarItems.filter(i => i.group === group).map(item => (
              <div key={item.id} onClick={() => setPage(item.id)}
                style={{
                  padding: '10px 20px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px',
                  background: page === item.id ? colors.soft : 'transparent',
                  color: page === item.id ? colors.primary : colors.text,
                  fontWeight: page === item.id ? 'bold' : 'normal',
                  borderLeft: page === item.id ? `3px solid ${colors.primary}` : '3px solid transparent'
                }}>
                {item.icon} {item.label}
              </div>
            ))}
          </div>
        ))}
        <div style={{ marginTop: '16px' }}>
          <div style={{ padding: '0 20px', fontSize: '11px', color: '#1e293b', fontWeight: 'bold', marginBottom: '4px' }}>AKUN</div>
          <div onClick={() => setAuthState('login')} style={{ padding: '10px 20px', display: 'flex', alignItems: 'center', gap: '10px', color: '#e53935', cursor: 'pointer' }}>🚪 Logout</div>
        </div>
      </div>

      <div style={{ marginLeft: '240px', flex: 1, padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h2 style={{ margin: 0, color: colors.text }}>{pageTitle[page]}</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
  background: colors.soft,
  padding: '6px 14px',
  borderRadius: '20px',
  color: colors.primary,
  fontSize: '14px'
}}>
  {role === 'dosen'
    ? '👨‍🏫 Dosen'
    : '👩‍🎓 Mahasiswa'}
</div>
            <div style={{ background: colors.primary, color: 'white', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>KR</div>
          </div>
        </div>

        <div style={{ ...cardStyle, marginBottom: '20px', display: 'flex', gap: '12px', alignItems: 'center' }}>
          <span style={{ color: colors.text, fontWeight: 'bold' }}>🔍 Filter:</span>
          <select value={filterTahun} onChange={e => setFilterTahun(e.target.value)} style={inputStyle}>
            <option value="">Semua Tahun</option>
            {tahunList.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
          <select value={filterKabupaten} onChange={e => setFilterKabupaten(e.target.value)} style={inputStyle}>
            <option value="">Semua Kabupaten</option>
            {kabupatenList.map(k => <option key={k} value={k}>{k}</option>)}
          </select>
        </div>

        {page === 'overview' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '20px' }}>
              <div style={cardStyle}>
                <div style={{ fontSize: '13px', color: '#c06080' }}>Total PDRB</div>
                <div style={{ fontSize: '28px', fontWeight: 'bold', color: colors.primary }}>{(totalPdrb/1000000).toFixed(2)} T</div>
                <div style={{ fontSize: '12px', color: '#4CAF50' }}>↑ {kabupatenList.length} kabupaten</div>
              </div>
              <div style={cardStyle}>
                <div style={{ fontSize: '13px', color: '#c06080' }}>Rata-rata Kemiskinan</div>
                <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#e53935' }}>{avgKemiskinan}%</div>
                <div style={{ fontSize: '12px', color: '#c06080' }}>dari data tersedia</div>
              </div>
              <div style={cardStyle}>
                <div style={{ fontSize: '13px', color: '#c06080' }}>Tingkat Pengangguran</div>
                <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#9C27B0' }}>{avgTPT}%</div>
                <div style={{ fontSize: '12px', color: '#c06080' }}>TPT rata-rata</div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '20px' }}>
              <div style={cardStyle}>
                <h3 style={{ color: colors.text, marginTop: 0 }}>Grafik PDRB</h3>
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart data={filterData(pdrb)}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#fce4ec" />
                    <XAxis dataKey="kabupaten" tick={{ fontSize: 11 }} />
                    <YAxis tick={{ fontSize: 11 }} />
                    <Tooltip />
                    <Bar dataKey="nilai_pdrb" fill="#e91e8c" radius={[4,4,0,0]} name="Nilai PDRB" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div style={cardStyle}>
                <h3 style={{ color: colors.text, marginTop: 0 }}>Tren Kemiskinan</h3>
                <ResponsiveContainer width="100%" height={220}>
                  <LineChart data={filterData(kemiskinan)}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#fce4ec" />
                    <XAxis dataKey="tahun" tick={{ fontSize: 11 }} />
                    <YAxis tick={{ fontSize: 11 }} />
                    <Tooltip />
                    <Line type="monotone" dataKey="persentase" stroke="#e53935" strokeWidth={2} dot={{ fill: '#e53935' }} name="%" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div style={cardStyle}>
                <h3 style={{ color: colors.text, marginTop: 0 }}>Tren Pengangguran</h3>
                <ResponsiveContainer width="100%" height={220}>
                  <LineChart data={filterData(pengangguran)}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#fce4ec" />
                    <XAxis dataKey="tahun" tick={{ fontSize: 11 }} />
                    <YAxis tick={{ fontSize: 11 }} />
                    <Tooltip />
                    <Line type="monotone" dataKey="tingkat_tpt" stroke="#9C27B0" strokeWidth={2} dot={{ fill: '#9C27B0' }} name="TPT %" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div style={cardStyle}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h3 style={{ margin: 0, color: colors.text }}>Data Lengkap</h3>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {['pdrb', 'kemiskinan', 'pengangguran'].map(t => (
                    <button key={t} onClick={() => setActiveTable(t)}
                      style={{ ...btnPrimary, background: activeTable === t ? `linear-gradient(135deg, ${colors.primary}, ${colors.accent})` : '#f5f5f5', color: activeTable === t ? 'white' : '#666', padding: '6px 14px' }}>
                      {t.charAt(0).toUpperCase() + t.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              {activeTable === 'pdrb' && <DataTable data={filterData(pdrb)} columns={['id','tahun','kabupaten','sektor','nilai_pdrb']} onDelete={(id) => handleDelete('pdrb', id)} colors={colors} />}
              {activeTable === 'kemiskinan' && <DataTable data={filterData(kemiskinan)} columns={['id','tahun','kabupaten','jumlah_miskin','persentase']} onDelete={(id) => handleDelete('kemiskinan', id)} colors={colors} />}
              {activeTable === 'pengangguran' && <DataTable data={filterData(pengangguran)} columns={['id','tahun','kabupaten','tingkat_tpt']} onDelete={(id) => handleDelete('pengangguran', id)} colors={colors} />}
            </div>
          </div>
        )}

        {page === 'pdrb' && (
          <div style={cardStyle}>

  <div
    style={{
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center',
      marginBottom:'16px'
    }}
  >
    <h3 style={{ color: colors.text }}>
      Data PDRB
    </h3>

    <button
      onClick={() => exportCSV(filterData(pdrb), 'pdrb.csv')}
      style={btnPrimary}
    >
      📥 Export CSV
    </button>
  </div>

  <ResponsiveContainer width="100%" height={250}>
            
              <BarChart data={pdrbChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#fce4ec" />
                <XAxis
  dataKey="label"
  tick={{ fontSize: 12 }}
/><YAxis /><Tooltip />
                <Bar dataKey="nilai_pdrb" fill="#e91e8c" radius={[4,4,0,0]} name="Nilai PDRB" />
              </BarChart>
            </ResponsiveContainer>
            <DataTable data={filterData(pdrb)} columns={['id','tahun','kabupaten','sektor','nilai_pdrb']} onDelete={(id) => handleDelete('pdrb', id)} colors={colors} />
          </div>
        )}

        {page === 'kemiskinan' && (
          <div style={cardStyle}>
            <h3 style={{ color: colors.text }}>Data Kemiskinan</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={kemiskinanChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#fce4ec" />
                <XAxis
  dataKey="label"
  tick={{ fontSize: 12 }}
/><YAxis /><Tooltip />
                <Bar dataKey="jumlah_miskin" fill="#e53935" radius={[4,4,0,0]} name="Jumlah Miskin" />
              </BarChart>
            </ResponsiveContainer>
            <DataTable data={filterData(kemiskinan)} columns={['id','tahun','kabupaten','jumlah_miskin','persentase']} onDelete={(id) => handleDelete('kemiskinan', id)} colors={colors} />
          </div>
        )}

        {page === 'pengangguran' && (
          <div style={cardStyle}>
            <h3 style={{ color: colors.text }}>Data Pengangguran</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={pengangguranChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#fce4ec" />
                <XAxis
  dataKey="label"
  tick={{ fontSize: 12 }}
/><YAxis /><Tooltip />
                <Bar dataKey="tingkat_tpt" fill="#9C27B0" radius={[4,4,0,0]} name="Tingkat TPT" />
              </BarChart>
            </ResponsiveContainer>
            <DataTable data={filterData(pengangguran)} columns={['id','tahun','kabupaten','tingkat_tpt']} onDelete={(id) => handleDelete('pengangguran', id)} colors={colors} />
          </div>
        )}
        {page === 'analisis' && (
<>
  <div style={cardStyle}>
    <h2>📈 Analisis Data</h2>

    <p>
      Ringkasan indikator ekonomi daerah berdasarkan data yang tersedia.
    </p>

    <table
      style={{
        width: '100%',
        borderCollapse: 'collapse'
      }}
    >
      <thead>
        <tr>
          <th>Kabupaten</th>
          <th>PDRB Tertinggi</th>
          <th>Kemiskinan</th>
          <th>Pengangguran</th>
        </tr>
      </thead>

      <tbody>
        {comparisonData.map((row, i) => (
          <tr key={i}>
            <td>{row.kabupaten}</td>
            <td>{row.pdrb}</td>
            <td>{row.kemiskinan}%</td>
            <td>{row.pengangguran}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  <div style={cardStyle}>
    <h3>📊 Grafik Perbandingan PDRB</h3>

    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={comparisonData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="kabupaten" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pdrb" fill="#2563eb" />
      </BarChart>
    </ResponsiveContainer>
  </div>

  <div style={cardStyle}>
    <h3>📝 Kesimpulan Otomatis</h3>

<div
  style={{
    background:'#f8fafc',
    padding:'20px',
    borderRadius:'12px',
    lineHeight:'1.8'
  }}
>
  {insightText}
</div>
  </div>
</>
)}
        {page === 'tentang' && (
  <div style={cardStyle}>
    <h2>ℹ️ Tentang Sistem</h2>

    <p>
      Sistem Informasi Ekonomi Daerah
      merupakan aplikasi berbasis web
      fullstack yang digunakan untuk
      mengelola dan memvisualisasikan
      data ekonomi daerah.
    </p>

    <hr />

    <h3>👩‍🎓 Pengembang</h3>

    <p>
      Kayla Rafifah Wijaya
      <br />
      NIM: 245020400111044
      <br />
      Kelas: GA
    </p>

    <h3>🛠 Teknologi</h3>

    <ul>
      <li>Frontend : ReactJS</li>
      <li>Backend : ExpressJS</li>
      <li>Database : PostgreSQL</li>
      <li>Deployment : Railway + Vercel</li>
    </ul>

    <h3>📚 Mata Kuliah</h3>

    <p>
      Introduction to Data Science for Economics
    </p>
  </div>
)}
        {page === 'input' && (
          <div style={{ display: 'grid', gap: '16px' }}>
            <div style={cardStyle}>
              <h3 style={{ color: colors.primary, marginTop: 0 }}>🏛️ Input PDRB</h3>
              <form onSubmit={async (e) => { e.preventDefault(); await axios.post(`${API}/pdrb`, formPdrb); setFormPdrb({ tahun: '', kabupaten: '', sektor: '', nilai_pdrb: '' }); fetchAll(); }}>
                <input placeholder="Tahun" value={formPdrb.tahun} onChange={e => setFormPdrb({...formPdrb, tahun: e.target.value})} required style={inputStyle} />
                <input placeholder="Kabupaten" value={formPdrb.kabupaten} onChange={e => setFormPdrb({...formPdrb, kabupaten: e.target.value})} required style={inputStyle} />
                <input placeholder="Sektor" value={formPdrb.sektor} onChange={e => setFormPdrb({...formPdrb, sektor: e.target.value})} required style={inputStyle} />
                <input placeholder="Nilai PDRB" value={formPdrb.nilai_pdrb} onChange={e => setFormPdrb({...formPdrb, nilai_pdrb: e.target.value})} required style={inputStyle} />
                <button type="submit" style={btnPrimary}>SIMPAN</button>
              </form>
            </div>
            <div style={cardStyle}>
              <h3 style={{ color: '#e53935', marginTop: 0 }}>👥 Input Kemiskinan</h3>
              <form onSubmit={async (e) => { e.preventDefault(); await axios.post(`${API}/kemiskinan`, formKemiskinan); setFormKemiskinan({ tahun: '', kabupaten: '', jumlah_miskin: '', persentase: '' }); fetchAll(); }}>
                <input placeholder="Tahun" value={formKemiskinan.tahun} onChange={e => setFormKemiskinan({...formKemiskinan, tahun: e.target.value})} required style={inputStyle} />
                <input placeholder="Kabupaten" value={formKemiskinan.kabupaten} onChange={e => setFormKemiskinan({...formKemiskinan, kabupaten: e.target.value})} required style={inputStyle} />
                <input placeholder="Jumlah Miskin" value={formKemiskinan.jumlah_miskin} onChange={e => setFormKemiskinan({...formKemiskinan, jumlah_miskin: e.target.value})} required style={inputStyle} />
                <input placeholder="Persentase (%)" value={formKemiskinan.persentase} onChange={e => setFormKemiskinan({...formKemiskinan, persentase: e.target.value})} required style={inputStyle} />
                <button type="submit" style={{...btnPrimary, background: 'linear-gradient(135deg, #e53935, #ef9a9a)'}}>SIMPAN</button>
              </form>
            </div>
            <div style={cardStyle}>
              <h3 style={{ color: '#9C27B0', marginTop: 0 }}>💼 Input Pengangguran</h3>
              <form onSubmit={async (e) => { e.preventDefault(); await axios.post(`${API}/pengangguran`, formPengangguran); setFormPengangguran({ tahun: '', kabupaten: '', tingkat_tpt: '' }); fetchAll(); }}>
                <input placeholder="Tahun" value={formPengangguran.tahun} onChange={e => setFormPengangguran({...formPengangguran, tahun: e.target.value})} required style={inputStyle} />
                <input placeholder="Kabupaten" value={formPengangguran.kabupaten} onChange={e => setFormPengangguran({...formPengangguran, kabupaten: e.target.value})} required style={inputStyle} />
                <input placeholder="Tingkat TPT (%)" value={formPengangguran.tingkat_tpt} onChange={e => setFormPengangguran({...formPengangguran, tingkat_tpt: e.target.value})} required style={inputStyle} />
                <button type="submit" style={{...btnPrimary, background: 'linear-gradient(135deg, #9C27B0, #ce93d8)'}}>SIMPAN</button>
              </form>
            </div>
          </div>
        )}

        {page === 'upload' && (
          <div style={{ display: 'grid', gap: '16px' }}>
            <div style={cardStyle}>
              <h3 style={{ color: colors.primary, marginTop: 0 }}>⬆️ Upload CSV PDRB</h3>
              <p style={{ color: '#c06080', fontSize: '14px' }}>Format: tahun, kabupaten, sektor, nilai_pdrb</p>
              <form onSubmit={async (e) => { e.preventDefault(); const fd = new FormData(); fd.append('file', file); await axios.post(`${API}/pdrb/upload`, fd); alert('Upload PDRB berhasil!'); fetchAll(); }}>
                <input type="file" accept=".csv" onChange={e => setFile(e.target.files[0])} required style={inputStyle} />
                <button type="submit" style={btnPrimary}>UPLOAD</button>
              </form>
            </div>
            <div style={cardStyle}>
              <h3 style={{ color: '#e53935', marginTop: 0 }}>⬆️ Upload CSV Kemiskinan</h3>
              <p style={{ color: '#c06080', fontSize: '14px' }}>Format: tahun, kabupaten, jumlah_miskin, persentase</p>
              <form onSubmit={async (e) => { e.preventDefault(); const fd = new FormData(); fd.append('file', file); await axios.post(`${API}/kemiskinan/upload`, fd); alert('Upload Kemiskinan berhasil!'); fetchAll(); }}>
                <input type="file" accept=".csv" onChange={e => setFile(e.target.files[0])} required style={inputStyle} />
                <button type="submit" style={{...btnPrimary, background: 'linear-gradient(135deg, #e53935, #ef9a9a)'}}>UPLOAD</button>
              </form>
            </div>
            <div style={cardStyle}>
              <h3 style={{ color: '#9C27B0', marginTop: 0 }}>⬆️ Upload CSV Pengangguran</h3>
              <p style={{ color: '#c06080', fontSize: '14px' }}>Format: tahun, kabupaten, tingkat_tpt</p>
              <form onSubmit={async (e) => { e.preventDefault(); const fd = new FormData(); fd.append('file', file); await axios.post(`${API}/pengangguran/upload`, fd); alert('Upload Pengangguran berhasil!'); fetchAll(); }}>
                <input type="file" accept=".csv" onChange={e => setFile(e.target.files[0])} required style={inputStyle} />
                <button type="submit" style={{...btnPrimary, background: 'linear-gradient(135deg, #9C27B0, #ce93d8)'}}>UPLOAD</button>
              </form>
            </div>
          </div>
        )}
        <div
  style={{
    textAlign:'center',
    marginTop:'40px',
    padding:'20px',
    color:'#64748b',
    borderTop:'1px solid #e2e8f0',
    fontSize:'14px'
  }}
>
  <div>
    Sistem Informasi Ekonomi Daerah
  </div>

  <div>
    Developed by Kayla Rafifah Wijaya
  </div>

  <div>
    Introduction to Data Science for Economics (GA)
  </div>

<div>
    Dosen Pengampu : David Kaluge, SE., MS., M.Ec.Dev., Ph.D.
  </div>

  <div>
    Universitas Brawijaya • 2026
  </div>
</div>
      </div>
    </div>
  );
}

function DataTable({ data, columns, onDelete, colors }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
      <thead>
        <tr style={{ background: '#fce4ec' }}>
          {columns.map(c => <th key={c} style={{ padding: '10px', textAlign: 'left', color: '#880e4f', borderBottom: '2px solid #f8bbd0' }}>{c.replace('_', ' ').toUpperCase()}</th>)}
          <th style={{ padding: '10px', color: '#880e4f', borderBottom: '2px solid #f8bbd0' }}>AKSI</th>
        </tr>
      </thead>
      <tbody>
        {data.map((d, i) => (
          <tr key={d.id} style={{ background: i % 2 === 0 ? '#fff' : '#fff9fb' }}>
            {columns.map(c => <td key={c} style={{ padding: '10px', borderBottom: '1px solid #fce4ec', color: '#4a0020' }}>{d[c]}</td>)}
            <td style={{ padding: '10px', borderBottom: '1px solid #fce4ec' }}>
              <button onClick={() => onDelete(d.id)} style={{ background: '#ffebee', color: '#e53935', border: '1px solid #ffcdd2', padding: '4px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '13px' }}>🗑️ Hapus</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;