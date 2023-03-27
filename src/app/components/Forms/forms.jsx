import { useState } from 'react';
import sendEmail from '../../../aws-ses/ses';

export default function Form() {
  const [formData, setFormData] = useState({ name: '', email: '', telefone: '', cargo:'', instagram:'', faturamento:'' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendEmail(formData);
    alert('Your message has been sent!');
    setFormData({ name: '', email: '', telefone: '',cargo:'', instagram:'',faturamento:'' });
  };  

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

      
      <input
        placeholder="Seu melhor e-mail "
        type="email"
       name="email"
       value={formData.email} 
       onChange={handleChange}
       
      />
      
     
      <input
        placeholder="Seu número de whatsApp"
        type="text" name="telefone"
        value={formData.telefone} 
        onChange={handleChange}
        
        />
        
<input
        placeholder="Qual o instagram do seu negócio?" name="instagram"value={formData.instagram} onChange={handleChange}
               
      />


      <input
        placeholder="Qual o seu cargo na empresa"name="cargo"value={formData.cargo} onChange={handleChange}
      />   
       <select name="faturamento" value={formData} onChange={handleChange}>
        <option value="">--Escolha quanto deseja faturar--</option>
        <option value="R$15 a 30 mil">R$15 a 30 mil</option>
        <option value="R$30 a R$60 mil">R$30 a R$60 mil</option>
        <option value="R$60 a 100 mil<">R$60 a 100 mil</option>
        <option value="R$100 a R$500 mil">R$100 a R$500 mil</option>
        <option value="mais de R$500 mil">mais de R$500 mil</option>
        
      </select>

      <button type="submit">Send</button>
    </form>
  );
}