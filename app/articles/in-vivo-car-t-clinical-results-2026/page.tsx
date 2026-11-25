import Link from "next/link";

export const metadata = {
  title: "In Vivo CAR-T Clinical Results 2026: CD19/CD20 vs BCMA",
  description: "Clinical results from Legend, CARsgen, Kelonia and EsoBiotec, including vector dose, response durability, safety and lentiviral vector CMC implications.",
  alternates: { canonical: "https://lentivirusvector.com/articles/in-vivo-car-t-clinical-results-2026" },
};

const cohorts = [
  ["Legend LB2501", "CD19/CD20", "19", "57.9% (11/19)", "57.9%"],
  ["CARsgen CT1182", "CD19/CD20", "6", "83.3% (5/6)", "50%"],
  ["Kelonia KLN-1010", "BCMA", "18 dosed", "100% evaluable", "4/6 with ≥4 months follow-up (sCR)"],
  ["EsoBiotec ESO-T01", "BCMA", "5", "80% (4/5)", "60% (sCR)"],
];
const doses = [
  ["4 × 10⁶", "7", "2.8 × 10⁸", "110,032", "42.3%"],
  ["6 × 10⁶", "8", "4.2 × 10⁸", "71,021", "53.1%"],
  ["2 × 10⁷", "3", "1.4 × 10⁹", "65,873", "34.5%"],
];
const sources = [
  ["Legend: ASH 2026 abstract", "https://onlineprogram.hematology.org/paper-details.aspx?pid=691701"],
  ["CARsgen: November 22, 2026 clinical disclosure", "https://www.prnewswire.com/news-releases/carsgen-presents-first-clinical-data-on-its-in-vivo-car-t-product-candidate-ct1182-302947651.html"],
  ["Kelonia: ASCO 2026 abstract (earlier six-patient cutoff)", "https://ascopubs.org/doi/abs/10.1200/JCO.2026.44.16_suppl.7509"],
  ["Kelonia: expanded ASCO cohort and dose-level coverage", "https://www.onclive.com/view/in-vivo-car-t-cell-therapy-drives-responses-and-mrd-negativity-in-r-r-myeloma"],
  ["Kelonia: expansion kinetics, conference coverage", "https://www.targetedonc.com/view/kln-1010-in-vivo-car-achieves-100-mrd-negativity-in-r-r-myeloma"],
  ["Kelonia: day-15 flow cytometry, secondary conference coverage", "https://www.pharmatell.com/eyes-on-pharma/pharma-phriday-june-5-2026"],
  ["EsoBiotec: phase 1 study, Nature Medicine", "https://www.nature.com/articles/s41591-026-04244-6"],
  ["EsoBiotec: extended follow-up, Nature Medicine", "https://www.nature.com/articles/s41591-026-04704-z"],
];
function DataTable({headers, rows}: {headers: string[]; rows: string[][]}) {
  return <div className="overflow-x-auto rounded-2xl border border-slate-200"><table className="w-full text-left text-sm"><thead className="bg-slate-100">{/* column headers */}<tr>{headers.map(h => <th scope="col" key={h} className="p-3">{h}</th>)}</tr></thead><tbody>{rows.map((r,i) => <tr key={i} className="border-t border-slate-200">{r.map((v,j) => <td key={j} className="p-3">{v}</td>)}</tr>)}</tbody></table></div>;
}
export default function ArticlePage() {
  const heading = "pt-8 text-3xl font-bold tracking-tight text-slate-950";
  return <main className="max-w-5xl mx-auto px-6 py-16">
    <Link href="/" className="text-sm font-semibold text-slate-600 underline">← Back to home</Link>
    <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-teal-700">Clinical landscape · CMC insights</p>
    <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-slate-950">In Vivo CAR-T Clinical Update 2026: CD19/CD20 and BCMA Results</h1>
    <p className="mt-5 mb-10 text-slate-500">LentivirusVector.com | November 25, 2026 | 7 min read</p>
    <article className="space-y-6 text-lg leading-8 text-slate-800">
      <p className="text-xl text-slate-600">From clinical proof of concept to therapeutic optimization: what early clinical data reveal about targeted lentiviral vector dose, functional potency and durable response.</p>
      <p>In vivo CAR-T uses targeted gene delivery to generate therapeutic cells inside patients, potentially avoiding individualized cell manufacturing and conventional lymphodepletion. Four early programs offer encouraging signals across lymphoma and multiple myeloma, but dose optimization and long-term disease control remain unresolved.</p>
      <h2 className={heading}>Clinical landscape</h2>
      <DataTable headers={["Program","Target","Patients","ORR","CR / sCR"]} rows={cohorts}/>
      <p className="text-sm text-slate-600">Selected early-stage cohorts; response criteria, disease, follow-up and patient populations differ. ORR = overall response rate; CR = complete response; sCR = stringent complete response.</p>
      <figure className="rounded-2xl border bg-slate-50 p-5">
        <figcaption className="font-bold mb-4">Reported response rates by cohort</figcaption>
        {[["Legend (11/19)",57.9],["CARsgen (5/6)",83.3],["Kelonia (evaluable)",100],["EsoBiotec (4/5)",80]].map(([label,value]) => <div key={label} className="mb-4"><div className="flex justify-between text-sm"><span>{label}</span><strong>{value}%</strong></div><div className="h-4 rounded bg-slate-200"><div className="h-4 rounded bg-teal-700" style={{width: value + "%"}}/></div></div>)}
        <p className="text-xs text-slate-600">Descriptive only; not evidence of comparative efficacy.</p>
      </figure>
      <h2 className={heading}>CD19/CD20: Legend Biotech and CARsgen</h2>
      <h3 className="text-2xl font-semibold">Legend LB2501</h3>
      <p>The ASH 2026 abstract describes 19 treated lymphoma patients at the June 28 cutoff, with median follow-up of 4.8 months. Eleven achieved CR. CRS occurred in 15 patients (grades 1–2), infusion reactions in 16 (grades 1–2), and one patient experienced grade 2 IEC-HS. No ICANS was reported. Hematologic adverse events included grade 3–4 events.</p>
      <DataTable headers={["Dose level","Patients","ORR / CR","Median peak copies/µg gDNA"]} rows={[["DL1","6","0%","1,068"],["DL2","8","100%","96,565"],["DL3","5","60%","23,802"]]}/>
      <p>The middle cohort had the highest median transgene signal and response rate. CAR-T cells remained detectable for up to 179 days in one patient. These data support exploration of an optimal biological dose, not a conclusion that dose escalation is detrimental.</p>
      <h3 className="text-2xl font-semibold">CARsgen CT1182</h3>
      <p>The November 22 disclosure covers six stage IV lymphoma patients at the October 31 cutoff. Doses ranged from 1.2 × 10⁸ to 7.2 × 10⁸ TU. Five responded, including three complete and two partial responses. Median follow-up was 3.2 months, with all responses ongoing at cutoff and the longest approaching five months. A CR occurred at the starting dose. The company reported grade 1 CRS only, no ICANS or dose-limiting toxicity, and one grade 3 leukopenia of uncertain attribution.</p>
      <p>One nonresponding patient had inadequate CAR-T expansion; the sponsor discussed exhaustion and antigen loss as contributing factors. This reinforces the importance of investigating baseline T-cell fitness and tumor antigen status.</p>
      <h2 className={heading}>BCMA: Kelonia and EsoBiotec</h2>
      <h3 className="text-2xl font-semibold">Kelonia KLN-1010</h3>
      <p>The expanded ASCO 2026 dataset includes 18 dosed patients with relapsed or refractory multiple myeloma, across three weight-based doses. The reported ORR and one-month marrow MRD negativity were both 100% among evaluable patients. Four of six patients followed for at least four months achieved sCR and two achieved VGPR. CRS was reported in 16/18, all grade 1–2; two ICANS events included one transient grade 3 event. The longest-followed patient remained MRD negative beyond ten months.</p>
      <DataTable headers={["Dose (IU/kg)","Patients","Total IU at 70 kg","Median peak copies/µg gDNA","Day 15 CAR+ cells"]} rows={doses}/>
      <p className="text-sm text-slate-600">Dose and kinetic figures are from expanded conference coverage, not the earlier six-patient ASCO abstract. Day-15 percentages are reported flow cytometry measurements. Weight conversion is illustrative.</p>
      <figure className="rounded-2xl border bg-slate-50 p-5">
        <figcaption className="font-bold mb-4">Kelonia: median peak transgene copies/µg genomic DNA</figcaption>
        {doses.map((d,i) => <div key={d[0]} className="mb-4"><div className="flex justify-between text-sm"><span>{d[0]} IU/kg (n={d[1]})</span><strong>{d[3]}</strong></div><div className="h-4 rounded bg-slate-200"><div className="h-4 rounded bg-teal-700" style={{width: [100,64.55,59.87][i]+"%"}}/></div></div>)}
        <p className="text-xs text-slate-600">Small nonrandomized cohorts. Transgene copies are not a direct absolute CAR-T cell count.</p>
      </figure>
      <p>The fivefold dose range did not produce a monotonic rise in median transgene signal. Patient heterogeneity, follow-up, transduction efficiency and antigen-driven expansion could contribute. The data do not prove that lower doses are superior.</p>
      <h3 className="text-2xl font-semibold">EsoBiotec ESO-T01</h3>
      <p>A five-patient phase 1 report in Nature Medicine described an 80% ORR and 60% sCR rate at 2 × 10⁸ TU, with MRD negativity in four responders and grade 3 CRS in three patients. A separate four-patient extended follow-up report described median PFS of four months and one sustained sCR at 15 months. These reports emphasize the distinction between early tumor response and sustained remission; the cohorts should not be pooled.</p>
      <h2 className={heading}>Can vector doses be compared across platforms?</h2>
      <DataTable headers={["Program","Reported dose","Illustrative total at 70 kg"]} rows={[["CARsgen","1.2–7.2 × 10⁸ TU","Same"],["Kelonia low","4 × 10⁶ IU/kg","2.8 × 10⁸ IU"],["Kelonia middle","6 × 10⁶ IU/kg","4.2 × 10⁸ IU"],["Kelonia high","2 × 10⁷ IU/kg","1.4 × 10⁹ IU"],["EsoBiotec","2 × 10⁸ TU","Same"],["Legend","Three dose cohorts in ASH abstract","Exact doses not specified in that abstract"]]}/>
      <p>Numerically similar TU and IU do not establish equivalent biological potency. Assay cell type, receptor density, activation state, assay conditions, expression readout and reference standards may differ. Physical-to-functional particle ratio and serum stability may also affect in vivo performance.</p>
      <h2 className={heading}>Implications for lentiviral vector CMC</h2>
      <p>Unlike ex vivo CAR-T, the vector itself is administered to the patient. Development must connect manufacturing quality to selective gene delivery, cellular function and clinical performance.</p>
      <div className="grid gap-3 md:grid-cols-2">{[["Target-specific potency","Assess relevant T-cell transduction and functional CAR expression."],["Particle quality","Evaluate functional recovery, nonfunctional particles and process impurities."],["Specificity and safety","Characterize off-target transduction, biodistribution, VCN and integration profiles."],["Stability","Evaluate envelope integrity, targeting function and potency after storage."],["Clinical correlation","Relate vector CQAs to cellular expansion, persistence, efficacy and toxicity."]].map(([title,body])=><section key={title} className="rounded-2xl border bg-slate-50 p-5"><h3 className="font-bold">{title}</h3><p className="text-sm leading-6">{body}</p></section>)}</div>
      <figure className="rounded-2xl border p-5"><figcaption className="font-bold mb-4">From manufacturing to clinical performance</figcaption>{["Vector quality and administered dose","Target-specific transduction","Functional CAR-T generation","Expansion and persistence","Clinical efficacy and safety"].map((v,i)=><div key={v} className="text-center">{i>0 && <div aria-hidden="true" className="text-slate-500">↓</div>}<div className="rounded-lg bg-slate-100 p-3 text-sm font-semibold">{v}</div></div>)}</figure>
      <h2 className={heading}>Conclusion</h2>
      <p>Early clinical results support the feasibility of in vivo CAR-T across multiple hematologic malignancies. The next challenge is achieving reproducible, selective and persistent CAR-T generation rather than maximizing vector titer alone. Larger datasets and longer observation are essential to establish the optimal biological dose and validate clinically predictive potency assays.</p>
      <h2 className={heading}>References</h2>
      <ol className="list-decimal pl-6 space-y-2 text-sm">{sources.map(([label,url])=><li key={url}><a className="underline text-teal-800" href={url}>{label}</a></li>)}</ol>
      <p className="border-t pt-5 text-sm text-slate-500">All products are investigational. This is a selected clinical landscape, not an exhaustive registry or treatment recommendation. Conference reports and sponsor disclosures are preliminary. Cross-trial comparisons cannot establish superiority.</p>
    </article>
  </main>;
}
