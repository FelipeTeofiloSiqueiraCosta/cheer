window.onload = async function(){
    // ScrollReveal().reveal('.card');
    var typed = new Typed('#title', {
        strings: ['Eu sei, eu sei... <br/> Parece besteira né?', 'Queria fazer algo legal pra você <br/> algo pra <span style="color: #a5a5f9;">te animar 🎉</span> <br/> e dar boas vindas', 'Espero que esse período possa ser um tempo de renovo pra você ♡', 'Mata a saudade das meninas <br/><br/> <img src="./sister.jpeg" style="width:300px; height:500px;"/>', 'Ah, e fala pra belinha que ja lançou <span style="color: #a5a5f9;">Arcane</span> <br/> a séria da netflix...', 
            'Provavelmente não nos veremos, então essa é minha <span style="color: #a5a5f9;">boas-vindas:</span>',
            '<span style="color: #a5a5f9; font-size: 4.5rem;">ESTOU FELIZ QUE ESTEJA AQUI</span>',
            '<span style="color: #a5a5f9; font-size: 4.5rem;">FICO FELIZ EM VER QUANTO CRESCEU</span>',
            '<span style="color: #a5a5f9; font-size: 4.5rem;">VOCÊ É MUITO ESFORÇADA</span>',
            '<span style="color: #a5a5f9; font-size: 4.5rem;">E IMPORTANTE PRA NÓS</span>',
            '<span style="color: #a5a5f9; font-size: 4.5rem;">VOCÊ TEM UM CORAÇÃO ENORME</span>',
            '<span style="color: #a5a5f9; font-size: 4.5rem;">MESMO SEM TE VER, SABER QUE ESTÁ PERTO JÁ É CONFORTANTE</span>',
            '<span style="color: #a5a5f9; font-size: 4.5rem;">ESTOU TORCENDO POR VOCÊ DAQUI</span>',
            '<span style="color: #ff658f; font-size: 4.5rem;">TE AMO</span>',
            '<span style="color: #ff658f; font-size: 4.5rem;">♡ ♡</span>',
            '<img src="./bye.png" style="width:300px; height:500px;"/>',
            '<span font-size: .75rem; color: #5d5d5f;">"Mas Deus demonstra seu amor por nós: Cristo morreu em nosso favor quando ainda éramos pecadores."</span><br/><br/>Romanos 5:8',
            '<span style="color: #ff658f; font-size: 4.5rem;">FIM</span>',
            // 'Provavelmente não nos veremos, então la vai minha tentativa de <span style="color: #a5a5f9;">boas-vindas</span>','Mas como sempre pensei em brincar um pouco','As frases estão em <span style="color: #a5a5f9;">Hexadecimal</span>, então você precisará traduzir'
        ],
        typeSpeed: 10,
        backSpeed: 20,
        backDelay: 1000,
        smartBackspace: true,
        onBegin: function(self) { 
            self.el.style.position="absolute"
            self.el.style.top="50%"
            self.el.style.transform="translateY(-50%)"
            self.el.style.margin="0"

        
        
         },
        onComplete: function(self){
            // self.el.style.position="relative"
            // self.el.style.top="0%"
            // self.el.style.transform="translateY(0)"
            // self.el.style.marginTop="4rem"

            // const cards = document.querySelectorAll('.card')
            // cards.forEach((card)=>{
            //     card.classList.remove('hide')
            //     card.classList.toggle('visible')

            // })
            // // var typed = new Typed('#text-1', {
            // //     strings: ['Você é importante'],
            // //     typeSpeed: 0,
            // // });
            // // var typed = new Typed('#text-2', {
            // //     strings: ['Te amo'],
            // //     typeSpeed: 0,
            // // });
            
            // // var typed = new Typed('#text-3', {
            // //     strings: ['Seus sentimentos e cuidado com sua familia mostra com grande e seu coração!'],
            // //     typeSpeed: 0,
            // // });
            // // var typed = new Typed('#text-4', {
            // //     strings: ['Você é muito esforçada'],
            // //     typeSpeed: 0,
            // // });
            
            // // var typed = new Typed('#text-5', {
            // //     strings: ['Quem nao ama nao conhece a Deus, porque Deus e amor'],
            // //     typeSpeed: 0,
            // // });
            // // var typed = new Typed('#text-6', {
            // //     strings: ['sim, eu fiz isso de madrugada, mas valeu espero que tenha gostado'],
            // //     typeSpeed: 0,
            // // });
           
            // // var typed = new Typed('#text-7', {
            // //     strings: ['4d,61,73,20,44,65,75,73,20,64,65,6d,6f,6e,73,74,72,61,20,73,65,75,20,61,6d,6f,72,20,70,6f,72,20,6e,6f,73,3a,20,43,72,69,73,74,6f,20,6d,6f,72,72,65,75,20,65,6d,20,6e,6f,73,73,6f,20,66,61,76,6f,72,20,71,75,61,6e,64,6f,20,61,69,6e,64,61,20,65,72,61,6d,6f,73,20,70,65,63,61,64,6f,72,65,73,2e'],
            // //     typeSpeed: 0,
            // // });

            const duration = 15 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0,shapes: ["heart"],
    colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"] };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

const interval = setInterval(function() {
  const timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  const particleCount = 50 * (timeLeft / duration);

  // since particles fall down, start a bit higher than random
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    })
  );
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    })
  );
}, 250);

  
            
        }
    });
    
}