const benefits = [
  "Entenda os principais elementos do concreto armado",
  "Aprenda a interpretar plantas e detalhes estruturais",
  "Visualize conceitos com explicações simples e objetivas",
  "Consulte o material durante estudos e rotinas de obra",
];

const modules = [
  "Fundamentos do concreto armado",
  "Materiais e propriedades",
  "Aço e armaduras",
  "Formas e elementos estruturais",
  "Leitura de plantas",
  "Concretagem e controle de qualidade",
  "Defeitos frequentes",
  "Metrados e segurança",
];

export default function App() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">GUIA VISUAL DE CONCRETO ARMADO</span>
            <h1>
              Da <span>Planta</span> à <span>Obra</span>, entenda o concreto armado de forma visual.
            </h1>
            <p className="subtitle">
              Um material direto ao ponto para estudantes, técnicos e profissionais iniciantes que querem ligar o desenho do projeto ao que acontece na obra.
            </p>

            <div className="benefit-list">
              {benefits.map((item) => (
                <div className="benefit" key={item}>
                  <span>✓</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <a className="cta" href="#oferta">QUERO ACESSAR AGORA</a>
            <p className="microcopy">Acesso imediato • Conteúdo digital • Pagamento único</p>
          </div>

          <div className="mockup-wrap" aria-label="Mockup do produto">
            <div className="book back-book">
              <div className="book-spine" />
              <div className="book-cover">
                <span className="book-small">GUIA VISUAL</span>
                <h2>DA PLANTA À OBRA</h2>
                <strong>CONCRETO ARMADO</strong>
                <div className="wireframe">
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
              </div>
            </div>

            <div className="phone">
              <div className="phone-screen">
                <span>CONCRETO ARMADO</span>
                <strong>Visualize.</strong>
                <strong>Entenda.</strong>
                <strong>Aplique.</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">O QUE VOCÊ VAI APRENDER</span>
            <h2>Um caminho visual para sair da teoria e enxergar a estrutura.</h2>
          </div>

          <div className="cards">
            {modules.map((module, index) => (
              <article className="card" key={module}>
                <div className="card-number">{String(index + 1).padStart(2, "0")}</div>
                <h3>{module}</h3>
                <p>Explicações objetivas, exemplos visuais e aplicação prática para facilitar sua compreensão.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="oferta">
        <div className="container offer">
          <div>
            <span className="eyebrow">OFERTA ESPECIAL</span>
            <h2>Tenha o guia completo para consultar sempre que precisar.</h2>
            <p>
              Estude no seu ritmo e use o material como apoio para interpretar conceitos, elementos e etapas do concreto armado.
            </p>
          </div>

          <div className="price-card">
            <span>Acesso completo</span>
            <div className="price">
              <small>por apenas</small>
              <strong>R$ 12,97</strong>
            </div>
            <a className="cta" href="#">QUERO MEU ACESSO</a>
            <p>Pagamento único • Acesso imediato</p>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <strong>Da Planta à Obra — Concreto Armado</strong>
          <span>Material educacional digital.</span>
        </div>
      </footer>
    </main>
  );
}
