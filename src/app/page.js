'use client';
import '../app/Home/styles.scss'
import  React,{useRef} from 'react';
import Form from './components/Forms/forms.jsx'
 import HeadLine from '../Router/router'
 import Image from 'next/image'
import star from'../../assets/star.png'
import prancheta from'../../assets/prancheta.png'
import complet from'../../assets/complet.png'

import sentEmail from '../aws-ses/ses.js'
export default function Home() {
  const ref = useRef(null)
function handleClick (){
  ref.current?.scrollIntoView({behavior:'smooth'})
}



  return(

  <div id='container'>
      <div class='imagem'>
      
   {/*container abaixo faz a transição do texta inicial.*/}
    <div class="sp-container">
	<div  class="sp-content">       
        <h2 class="frame-5">
       
			<span>
        <div className='imgRossInicio'/>
         </span>
         <span>Agencia Ross,&nbsp; agende&nbsp; um horario conosco.</span>
			<span> </span>
      <div className='containerButton1'>   
			<span>
      <button onClick={sentEmail} className='raise'>AGENDAR HORÁRIO</button>
				
      </span>   </div>
		</h2></div>
      
       
    </div>  
    <HeadLine ref={ref} />
       </div> 
       
      {/*formulario*/}
      <div className='containerForm'>
    <Form/>
    </div>

      <div className='container2'>
      <h2 className='text2Main' >SE A SUA EMPRESA</h2>
      <div className='container2Text'>
        <div className='container2Icon30k'>
        <h2 className='icon30k'>30k  </h2>
      <h3 className='text2'>Fatura mais de R$30 mil reais</h3></div>

      <div className='container2Icon30k'>
      <div className='iconGrafico'/>  
      <h3 className='text2'>Busca ter previsibilidade nas vendas</h3>
      </div>

      <div className='container2Icon30k'>
      <div className='iconSubir'>  </div>
      <h3 className='text2'>Busca receber mais leads qualificados</h3></div> </div>
   <div className='container2Button'> <button onClick={handleClick} class='raise'>Nós vamos te ajudar</button></div></div>
     {/*container que contem a parte da equipe da empresa*/}
      <div className='container3'>
          <h2 className='text3'>O QUE A AGENCIA ROSS FAZ?</h2>
          <h4 className='text3'>Somos um time de especialistas e fazemos dezenas de negócios venderem mais através de campanhas</h4>
          <h4 className='text3'>nas Plataformas: Facebook, Instagram, Google, Youtube, LinkedIn, Tik Tok dentre outras..</h4> 
          <div className="containerEquipe">
   
   {/*Carrousel da equipe*/}
          <div class="slider">
	<div class="slide-track">
	<div class="card">
  <h4 className='textTime'>Diretor De Operações e Líder do time</h4>
  <h3 className='textTime'>MATHEUS ROCHA</h3>
  <div className="imgEquipeR"></div>
</div></div>
<div class="slide-track">
<div class="card">
<h4 className='textTime'>CEO – Head Comercial</h4>
  <h3 className='textTime'>GERSON GONÇALVES</h3>
  <div className="imgEquipeG">
  </div>
    </div>
    </div>  
    <div class="slide-track">
		
    <div class="card">
<h4 className='textTime'>Diretor Audio Visual</h4>
  <h3 className='textTime'>GIAN GABOARDI</h3>
  <div className="imgEquipeJ"></div>
    </div>
    </div>

    <div class="slide-track">
		<div class="card">
<h4 className='textTime'>Head Social Midia e Designer</h4>
  <h3 className='textTime'>MARIA EDUARDA</h3>
  <div className="imgEquipeE"></div>
    </div>
    </div>
    <div class="slide-track"> 
    <div class="card">
<h4 className='textTime'>Gestor de tráfego mirin</h4>
  <h3 className='textTime'>MARCOS JOSÉ</h3>
  <div className="imgEquipeM"></div>
    </div>
    </div>

    <div class="slide-track">
    <div class="card">
<h4 className='textTime'>Diretor De Operações e Líder do time</h4>
  <h3 className='textTime'>MATHEUS ROCHA</h3>
  <div className="imgEquipeR"></div>
    </div>
    </div>
    <div class="slide-track"> 
    <div class="card">
<h4 className='textTime'>CEO – Head Comercial</h4>
  <h3 className='textTime'>GERSON GONÇALVES</h3>
  <div className="imgEquipeG"></div>
    </div>
    </div>

    
</div>
    </div>
    {/*Carrosel banner*/ }
 <div class="slider2">
	<div class="slide-track2">
		<div class="slide2">
			
		</div>
		<div class="slide2">
			
		</div>
		<div class="slide2">
			
		</div>
		<div class="slide2">
			
		</div>
		<div class="slide2">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="350" alt="" />
		</div>
		<div class="slide2">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="350" alt="" />
		</div>
		<div class="slide2">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="350" alt="" />
		</div>
		<div class="slide2">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="350" alt="" />
		</div>
		<div class="slide2">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="350" alt="" />
		</div>
		<div class="slide2">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="350" alt="" />
		</div>
		<div class="slide2">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="350" alt="" />
		</div>
		<div class="slide2">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="350" alt="" />
		</div>
		<div class="slide2">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="350" alt="" />
		</div>
		<div class="slide2">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"  height="100" width="350" alt="" />
		</div>
	</div>
</div>
        </div>
  <div className='container4'>
    <h2 className='text4'>Como funciona?</h2></div>
    <div className='container5'>
    <div className='spaceContainer5'>
    <Image src={star} style={{height:40, width:70}} alt=''/>    
    <h3 className='text5'>ENTENDEMOS O OBJETIVO<br/>DO SEU NEGÓCIO</h3>  
    </div>
      
    <div className='spaceContainer5'> 
    <Image src={prancheta} style={{height:40,width:70}} alt=''/> 
    <h3 className='text5'>CRIAMOS UMA ESTRATÉGIA <br/>PERSONALIZADA</h3>   
    </div>
     
    <div className='spaceContainer5'> 
    <Image src={complet} style={{height:40,width:70}} alt=''/> 
    <h3 className='text5'>ENTRAMOS EM CAMPO PARA<br/> EXECUTAR</h3>   
    </div>
  </div>

    <dix className='container6'>
      <h2 className='text6'>TEMOS UMA ESTRUTURA DE VENDAS<br/>PODEROSA CAPAZ DE FAZER O SEU NEGÓCIO<br/>DECOLAR ATRAVÉS DA INTERNET</h2>
      </dix>  

      <div className='container7'>
      <div className='spaceContainer7'>
        
    <h3 className='text7'>ESTRATÉGIA</h3>  
    <h3 className='text7'> Plano estratégico<br/>&nbsp;&nbsp;&nbsp;Personalizado</h3> 
    </div>
    
    <div className='spaceContainer7'> 
    
    <h3 className='text7'>FACEBOOK ADS</h3>   
    <h3 className='text7'>Tráfego Pago no Facebook ADS</h3>
    </div>
     
    <div className='spaceContainer7'> 
    
    <h3 className='text7'>GOOGLE ADS</h3>
    <h3 className='text7'>Tráfego Pago no Google ADS</h3>
     </div>
   
    <div className='spaceContainer7'> 
    
    <h3 className='text7'>COPYWRITING</h3>
    <h3 className='text7'>Construímos a comunicação certa para você vender mais</h3>
     </div>
        </div> 
        <div className='container8'>
          <h3 className='text8'> Hoje você pode receber nossos serviços completos de marketing</h3>
          <h2 className='text8'>PELO PREÇO DE UM FUNCIONÁRIO!</h2>
          <div className='containerButton3'>
          <button  onClick={handleClick}  className='raise'>ENTRAR EM CONTATO AGORA</button>
          </div></div>
        <div className='container9'>
          <h3 className='text9'>DEPOIMENTOS</h3>
          <h2 className='text9'>O QUE OS NOSSOS CLIENTES DIZEM:</h2>
          </div>  
          <div className='container10'>
          <div className='ocuparSpace1'> </div>
          <div className='ocuparSpace2'> </div>
          <div className='ocuparSpace3'> </div>
          </div>   

        
          <div className='containerFinal'>
          
            <div className='imgRoss'/>
          </div>
  </div>
)
}
