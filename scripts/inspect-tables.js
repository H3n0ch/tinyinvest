const { Client } = require("pg");

const client = new Client({
  connectionString: "postgresql://postgres:8exng8sfQ2EGee5Y@db.qtssdcytplgputcvdrhe.supabase.co:5432/postgres",
  ssl: { rejectUnauthorized: false },
});

async function inspectTable(name) {
  const { rows } = await client.query(`
    SELECT column_name, data_type, is_nullable
    FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = $1
    ORDER BY ordinal_position;
  `, [name]);
  console.log(`\n═══ ${name} ═══`);
  rows.forEach(r => console.log(`  ${r.column_name.padEnd(30)} ${r.data_type.padEnd(20)} nullable:${r.is_nullable}`));
}

async function sampleData(name, limit = 2) {
  const { rows } = await client.query(`SELECT * FROM public.${name} LIMIT ${limit}`);
  console.log(`\n--- Sample from ${name} ---`);
  rows.forEach(r => console.log(JSON.stringify(r, null, 2)));
}

(async () => {
  await client.connect();
  await inspectTable("bookings");
  await inspectTable("escapes");
  await sampleData("bookings", 1);
  await sampleData("escapes", 1);
  await client.end();
})();
