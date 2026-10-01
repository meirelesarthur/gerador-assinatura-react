import { useRef, useState } from 'react';
import html2canvas from 'html2canvas';

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const signatureRef = useRef(null);

  const [firstName, ...rest] = name.split(' ');
  const lastName = rest.join(' ');

  async function generateImage() {
    const canvas = await html2canvas(signatureRef.current, {
      useCORS: true,
      backgroundColor: null,
    });
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'assinatura.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="container">
      <h1>GB Gerador de Assinatura</h1>
      <div className="form-group">
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" placeholder="Digite o nome" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="text" id="email" placeholder="Digite o email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="role">Cargo</label>
        <input type="text" id="role" placeholder="Digite o cargo" value={role} onChange={(e) => setRole(e.target.value)} />
      </div>
      <button onClick={generateImage}>Gerar Imagem</button>

      <div id="output">
        <h2>Preview da Assinatura</h2>
        <div className="signature-card" id="signaturePreview" ref={signatureRef}>
          <div className="signature-left">
            <img src="/Logo.svg" alt="Logo GB Agritech" />
          </div>
          <div className="signature-right" id="signatureContent">
            <h2><strong>{firstName}</strong> <span>{lastName}</span></h2>
            <p>{role}</p>

            <div>
              <img src="/mail.png" alt="Ícone de Email" />
              <span>{email}</span>
            </div>
            <div>
              <img src="/web.png" alt="Ícone de Website" />
              <span>www.gbagritech.com</span>
            </div>
            <div>
              <img src="/linkedin.png" alt="Ícone de LinkedIn" />
              <span>/gbagritech</span>
            </div>
            <div>
              <img src="/instagram.png" alt="Ícone de Instagram" />
              <span>@gbagritech</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
