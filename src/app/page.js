'use client';
import '../app/Home/styles.scss'
import  React,{useRef} from 'react';
import Form from './components/Forms/forms.jsx'
 import HeadLine from '../Router/router'
 import Image from 'next/image'
import client from'../../assets/client.png'
import ads from'../../assets/ads.png'
import media from'../../assets/social-media.png'
import estrategia from'../../assets/estrategia.png'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img33 from '../../assets/img33.png'
import img4 from '../../assets/img4.png'
import img6 from '../../assets/img6.png'
import img7 from '../../assets/img7.png'
import img8 from '../../assets/img8.png'
import img9 from '../../assets/img9.png'
import img10 from '../../assets/img10.png'
import img11 from '../../assets/img11.png'
import img12 from '../../assets/img12.png'
import weed from '../../assets/weed.png'
  import Capa from '../../assets/Capa.png'
import logoRoss from '../../assets/logoRoss.png'
export default function Home() {
  const ref = useRef(null)
function handleClick (){
  ref.current?.scrollIntoView({behavior:'smooth'})
}



  return(

  <div id='container'>
    <div className='containerCapa'>
    
     
   
   {/*container abaixo faz a transição do texta inicial.*/}
    <div className="sp-container">
	<div  className="sp-content">       
        <h2 className="frame-5">
       
        <span className='iconCapa'>  
        <Image src={logoRoss} alt='' style={{height:200, width:200}}/>   </span>
               <span > <h2 className='textCapa'>Marketing digital que funciona </h2> </span>
               <span> <h4 className='textCapa'> Descubra o Método BASE que já ajudou dezenas de restaurantes
                e deliverys a superaram a meta de vendas.</h4></span>     
               <div className='containerCapa2'>   <span><Form/></span>
        <span className='imgCapa'>
        <Image className='imgCapa '  alt=''quality={100} loading="lazy"  src={Capa}width='750' height='750'   />
      
        </span>      </div>
		</h2></div>
      
       
    </div>  
    <HeadLine ref={ref} />
    </div>
  
       
       
      {/*formulario*/}
     

      <div className='container2'>
      <h2 className='text2Main' >O que falta para você faturar mais atualmente?</h2>
      <div className='container2Text'>
        <div className='container2Icon30k'>
        <h2 className='icon30k'>  </h2>
      <h3 className='text2'>Se você não tem clareza nessa resposta, 
      nosso metodo testado e validado para restaurantes e deliverys pode te ajudar.
</h3></div>

      <div className='container2Icon30k'>
      <div className='iconGrafico'/>  
      <h3 className='text2'> Sabemos que você não quer ficar refém das taxas do ifood, 
      sempre pagando pelo cliente que já é seu.
</h3>
      </div>

      <div className='container2Icon30k'>
      <div className='iconGrafico'/>  
      <h3 className='text2'>Sabemos também que a velha forma de fazer marketing 
      focado em seguidores para o instagram não paga as contas.
</h3>
      </div>

      <div className='container2Icon30k'>
      <div className='iconSubir'>  </div>
      <h3 className='text2'>Agora, adotar um metodo de vendas validado e feito para restaurantes e deliverys,
      isso pode fazer seu negócio crescer, e você vai entender o porque!</h3></div> </div>
   <div className='container2Button'> <button onClick={handleClick} class='raise'>Nós vamos te ajudar</button></div></div>


   <div   className='container3-4'> 
       <div className='containerText3-4'>
      <h3>Lebes ultrapassou 160% da sua meta de vendas no varejo com um <p/>processo usando o WhatsApp</h3>
      <h4>Através do Método V4, em menos de 3 meses, a rede varejista digitalizou toda a sua <p/>operação nas lojas físicas,
         capacitou os gerentes na utilização de uma plataforma que<p/> atrai clientes, 
         além de rodar campanhas de marketing mais assertivas, que resultaram <p/>em 160% da meta batida.</h4>
         <span/>
         <h3>Lebes ultrapassou 160% da sua meta de vendas no varejo com um <p/>processo usando o WhatsApp</h3>
      <h4>Através do Método V4, em menos de 3 meses, a rede varejista digitalizou toda a sua <p/>operação nas lojas físicas,
         capacitou os gerentes na utilização de uma plataforma que<p/> atrai clientes, 
         além de rodar campanhas de marketing mais assertivas, que resultaram <p/>em 160% da meta batida.</h4>
         </div>
         <div className='containerImg3-4'> <Image src={weed} alt=''style={{height:240, width:270}}/>

         </div>
         </div> 
     

     {/*container que contem a parte da equipe da empresa*/}
      <div className='container3'>
          <h2 className='text3'>Quem somos?</h2>
      <h3>Um time de especialistas prontos para fazer seu restaurante decolar!
        </h3>
       
          <div className="containerEquipe">
   
   {/*Carrousel da equipe*/}
          <div className="slider">
	<div className="slide-track">
	<div className="card">
  <h4 className='textTime'>Diretor De Operações e Líder do time</h4>
  <h3 className='textTime'>MATHEUS ROCHA</h3>
  <div className="imgEquipeR"></div>
</div></div>
<div className="slide-track">
<div className="card">
<h4 className='textTime'>CEO – Head Comercial</h4>
  <h3 className='textTime'>GERSON GONÇALVES</h3>
  <div className="imgEquipeG">
  </div>
    </div>
    </div>  
    
    <div className="slide-track">
    <div className="card">
<h4 className='textTime'>Diretor Audio Visual</h4>
  <h3 className='textTime'>GIAN GABOARDI</h3>
  <div className="imgEquipeJ"></div>
    </div>
    </div>

    <div className="slide-track">
		<div className="card">
<h4 className='textTime'>Head Social Midia e Designer</h4>
  <h3 className='textTime'>MARIA EDUARDA</h3>
  <div className="imgEquipeE"></div>
    </div>
    </div>
    
    <div className="slide-track"> 
    <div className="card">
<h4 className='textTime'>Gestor de tráfego mirin</h4>
  <h3 className='textTime'>MARCOS JOSÉ</h3>
  <div className="imgEquipeM"></div>
    </div>
    </div>

    <div className="slide-track">
    <div className="card">
<h4 className='textTime'>Diretor De Operações e Líder do time</h4>
  <h3 className='textTime'>MATHEUS ROCHA</h3>
  <div className="imgEquipeR"></div>
    </div>
    </div>
    <div className="slide-track"> 
    <div className="card">
<h4 className='textTime'>CEO – Head Comercial</h4>
  <h3 className='textTime'>GERSON GONÇALVES</h3>
  <div className="imgEquipeG"></div>
    </div>
    </div>

    <div className="slide-track">
    <div className="card">
<h4 className='textTime'>Diretor Audio Visual</h4>
  <h3 className='textTime'>GIAN GABOARDI</h3>
  <div className="imgEquipeJ"></div>
    </div>
    </div>

    <div className="slide-track">
		<div className="card">
<h4 className='textTime'>Head Social Midia e Designer</h4>
  <h3 className='textTime'>MARIA EDUARDA</h3>
  <div className="imgEquipeE"></div>
    </div>
    </div>

    
</div>
    </div>
    {/*Carrosel banner*/ }
 <div className="slider2">
	<div className="slide-track2">
		<div className="slide2">
			
		</div>
		<div className="slide2">
			
		</div>
		<div className="slide2">
			
		</div>
		<div className="slide2">
			
		</div>
		<div className="slide2">
			<Image src={img1} height="100" width="100" alt="" />
		</div>
		<div className="slide2">
			<Image src={img2} height="100" width="100" alt="" />
		</div>
		<div className="slide2">
			<Image src={img33} height="100" width="100" alt="" />
		</div>
		<div className="slide2">
			<Image src={img4} height="100" width="100" alt="" />
		</div>
		<div className="slide2">
			<Image src={img6} height="100" width="100" alt="" />
		</div>
		<div className="slide2">
			<Image src={img7} height="100" width="100" alt="" />
		</div>
		<div className="slide2">
			<Image src={img8}height="100" width="100" alt="" />
		</div>
		<div className="slide2">
			<Image src={img9} height="100" width="100" alt="" />
		</div>
		<div className="slide2">
			<Image src={img10} height="100" width="100" alt="" />
		</div>
		<div className="slide2">
			<Image src={img11}  height="100" width="100" alt="" />
		</div>
    <div className="slide2">
			<Image src={img12}  height="100" width="100" alt="" />
		</div>
    <div className="slide2">
			<Image src={img1}  height="100" width="100" alt="" />
		</div>
    <div className="slide2">
			<Image src={img2}  height="100" width="100" alt="" />
		</div>
    <div className="slide2">
			<Image src={img33}  height="100" width="100" alt="" />
		</div>
    <div className="slide2">
			<Image src={img4}  height="100" width="100" alt="" />
		</div>
    <div className="slide2">
			<Image src={img6}  height="100" width="100" alt="" />
		</div>
    <div className="slide2">
			<Image src={img7}  height="100" width="100" alt="" />
		</div>
    <div className="slide2">
			<Image src={img8}  height="100" width="100" alt="" />
		</div>
    <div className="slide2">
			<Image src={img9}  height="100" width="100" alt="" />
		</div>
    <div className="slide2">
			<Image src={img10}  height="100" width="100" alt="" />
		</div>
    <div className="slide2">
			<Image src={img11}  height="100" width="100" alt="" />
		</div>
    <div className="slide2">
			<Image src={img12}  height="100" width="100" alt="" />
		</div>
	</div>

</div>
        </div>

  <div className='container4'>
    <h2 className='text4'>Como funciona?</h2>
    <h3 className='text4'>Se você quer acelerar o crescimento do seu negócio, 
    precisa fidelizar melhor seus clientes, atrair mais pessoas e ter uma estratégia montada para convertê-los em clientes, 
    sem pagar taxas para os apps de comida.</h3>
    <h3 className='text4'> E, nisso, o metodo B.A.S.E pode te ajudar.</h3>
   
    <div className='container5'>
    <div className='spaceContainer5'>
    <Image src={client} alt=''style={{height:75, width:75,padding:10}}/>
    <h2 className='text5'>Base <p/>Forte</h2>
    <h4 className='text5'> Chamamos o seu cliente pelo nome no whatsapp,
     oferecendo o produto que ele sempre compra no seu restaurante.</h4>
  
    </div>
      
    <div className='spaceContainer5'> 
    <Image src={ads} alt=''style={{height:75, width:75,padding:10}}/>
    <h2 className='text5'>Anuncios <p/>Perseguidores </h2> <h4 className='text5'>Buscamos o melhor cliente para seu negócio.
     Aquele que está procurando o que a sua empresa tem a oferecer.
     </h4>
    </div>

    <div className='spaceContainer5'> 
    <Image src={media} alt=''style={{height:75, width:75,padding:10}}/>
    <h2 className='text5'>Social Media<p/> Impactante </h2> <h4 className='text5'> Os clientes comem com os olhos! 
    Tenha um desing profissional em toda experiência da sua marca e em cada posicionamento da sua empresa.
    </h4>
    </div>

    <div className='spaceContainer5'> 
    <Image src={estrategia} alt=''style={{height:75, width:75,padding:10}}/>
    <h2 className='text5'>Estratégias<p/> Personalizadas</h2>
    <h4 className='text5'> Definimos as estrategias certas para cada canal de venda do seu negócio,
     resolvemos os gargalos e batemos sua meta de faturamento.   </h4>
    </div>
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
