$(function(){

    //-----------------------------------------------------------------------DECLARATION DES VARIABLES----------------------------------------------------------------------//


      var compteur=2, compteurEnnemi = 0, tableauEnnemi = [], tableauTir = [], tableauTirBoss = [], tableauLaserBoss = [], tableauAsteroideBoss = [], tableauBoss = [], intervalID, intervalID1, fondID, pas = 1, pasSprite = 1, vieID, arreterID, scoreID, rng = 5000, nbVie = 100, tirBossID, asteroidBossID, laserBossID, collisionBossID, attaqueID, tableauMissile = [];

      var armure = $('#armure').html();
      var vie = $('#pv').html();
      var pasComp = 0;
      var variable=0;
      var rep=0;
      var mis=0;
      var compteurScore = 0;
      var point = 0;
      var hautID;
      var basID;
      var gaucheID;
      var droiteID;
      var moveHaut = true;
      var moveBas = true;
      var moveGauche = true;
      var moveDroite = true;
      var activeClavier = true;
      var mlm = $(window).innerWidth();
      var xx = true;

      $('#pointDeVie').html(nbVie);

  //--------------------------------------------------------------------FONCTIONS CREATIONS DES ELEMENTS--------------------------------------------------------------------//


      var ennemi = function(){
        var bloc = document.createElement('div');
        bloc.id = [compteurEnnemi];
        bloc.style.position ='absolute';
        bloc.style.display = 'inline-block';
        bloc.style['z-index'] = '0';
        bloc.style.width = '180px';
        bloc.style.height = '100px';
        bloc.style.overflow = 'hidden';
        bloc.style.top = Math.random()*(window.innerHeight-100) +'px';
        bloc.style.left = innerWidth + 400 + 'px';
        document.getElementById('ecranDeJeu').appendChild(bloc);
        var imageEnnemi = document.createElement('img');
        imageEnnemi.src = 'img/enne.png';
        imageEnnemi.style.position = 'absolute';
        imageEnnemi.style.display = 'block';
        document.getElementById(bloc.id).appendChild(imageEnnemi);
        tableauEnnemi.push(bloc);
        compteurEnnemi++;
        return this;
      };

      var asteroide = function(){
        var bloc = document.createElement('div');
        bloc.id = [compteurEnnemi];
        bloc.style.position ='absolute';
        bloc.style.display = 'inline-block';
        bloc.style['z-index'] = '0';
        bloc.style.width = '180px';
        bloc.style.height = '100px';
        bloc.style.overflow = 'hidden';
        bloc.style.top = Math.random()*(window.innerHeight-100) +'px';
        bloc.style.left = innerWidth + 400 + 'px';
        document.getElementById('ecranDeJeu').appendChild(bloc);
        var imageEnnemi = document.createElement('img');
        imageEnnemi.src = 'img/asteroid.gif';
        imageEnnemi.style.position = 'absolute';
        imageEnnemi.style.display = 'block';
        document.getElementById(bloc.id).appendChild(imageEnnemi);
        tableauEnnemi.push(bloc);
        compteurEnnemi++;
        return this;
      };

      var tir = function(){
        var bloc = document.createElement('div');
        bloc.id = [compteurEnnemi];
        bloc.style.position ='absolute';
        bloc.style.display = 'inline-block';
        bloc.style['z-index'] = '200';
        bloc.style.width = '50px';
        bloc.style.height = '50px';
        bloc.style.overflow = 'hidden';
        bloc.style.top = Math.ceil(parseFloat(document.body.children[0].children[2].style.top)) + 45 + 'px';
        bloc.style.left = Math.ceil(parseFloat(document.body.children[0].children[2].style.left)) + 100 + 'px';
        document.getElementById('ecranDeJeu').appendChild(bloc);
        var imageEnnemi = document.createElement('img');
        imageEnnemi.src = 'img/boule.png';
        imageEnnemi.style.position = 'absolute';
        imageEnnemi.style.display = 'block';
        document.getElementById(bloc.id).appendChild(imageEnnemi);
        tableauTir.push(bloc);
        compteurEnnemi++;
        return this;
      };

      var missile = function(){
        var bloc = document.createElement('div');
        bloc.id = [compteurEnnemi];
        bloc.style.position ='absolute';
        bloc.style.display = 'inline-block';
        bloc.style['z-index'] = '200';
        bloc.style.width = '50px';
        bloc.style.height = '50px';
        bloc.style.overflow = 'hidden';
        bloc.style.top = Math.ceil(parseFloat(document.body.children[0].children[2].style.top)) + 45 + 'px';
        bloc.style.left = Math.ceil(parseFloat(document.body.children[0].children[2].style.left)) + 100 + 'px';
        document.getElementById('ecranDeJeu').appendChild(bloc);
        var imageEnnemi = document.createElement('img');
        imageEnnemi.src = 'img/missile.gif';
        imageEnnemi.style.position = 'absolute';
        imageEnnemi.style.display = 'block';
        document.getElementById(bloc.id).appendChild(imageEnnemi);
        tableauMissile.push(bloc);
        compteurEnnemi++;
        return this;
      };

      var boss = function(){
        var bloc = document.createElement('div');
        bloc.id = "boss";
        bloc.style.position ='absolute';
        bloc.style.display = 'inline-block';
        bloc.style['z-index'] = '200';
        bloc.style.width = '665px';
        bloc.style.height = '440px';
        bloc.style.overflow = 'hidden';
        bloc.style.top = (innerHeight/2)-220 + 'px';
        bloc.style.left = innerWidth  + 250+ 'px';
        document.getElementById('ecranDeJeu').appendChild(bloc);
        var imageEnnemi = document.createElement('img');
        imageEnnemi.src = 'img/boss1.png';
        imageEnnemi.style.position = 'absolute';
        imageEnnemi.style.display = 'block';
        document.getElementById(bloc.id).appendChild(imageEnnemi);
        tableauBoss.push(bloc);
        return this;
      };

      var tirBoss = function(){
        var bloc = document.createElement('div');
        bloc.id = [compteurEnnemi];
        bloc.style.position ='absolute';
        bloc.style.display = 'inline-block';
        bloc.style['z-index'] = '200';
        bloc.style.width = '50px';
        bloc.style.height = '50px';
        bloc.style.overflow = 'hidden';
        bloc.style.top = parseFloat($('#boss').css('top')) + 200 + 'px';
        bloc.style.left = parseFloat($('#boss').css('left')) + 250 + 'px';
        document.getElementById('ecranDeJeu').appendChild(bloc);
        var imageEnnemi = document.createElement('img');
        imageEnnemi.src = 'img/boule.png';
        imageEnnemi.style.position = 'absolute';
        imageEnnemi.style.display = 'block';
        document.getElementById(bloc.id).appendChild(imageEnnemi);
        tableauTirBoss.push(bloc);
        compteurEnnemi++;
        return this;
      };

      var laserBoss = function(){
        var bloc = document.createElement('div');
        bloc.id = [compteurEnnemi];
        bloc.style.position ='absolute';
        bloc.style.display = 'inline-block';
        bloc.style['z-index'] = '0';
        bloc.style.width = '2200px';
        bloc.style.height = '130px';
        bloc.style.overflow = 'hidden';
        bloc.style.top = parseFloat($('#boss').css('top')) + 174 + 'px';
        bloc.style.left = innerWidth - 500 + 'px';
        document.getElementById('ecranDeJeu').appendChild(bloc);
        var imageEnnemi = document.createElement('img');
        imageEnnemi.src = 'img/laser.png';
        imageEnnemi.style.position = 'absolute';
        imageEnnemi.style.display = 'block';
        document.getElementById(bloc.id).appendChild(imageEnnemi);
        tableauLaserBoss.push(bloc);
        compteurEnnemi++;
        return this;
      };

      var asteroideBoss = function(){
        var bloc = document.createElement('div');
        bloc.id = [compteurEnnemi];
        bloc.style.position ='absolute';
        bloc.style.display = 'inline-block';
        bloc.style['z-index'] = '0';
        bloc.style.width = '50px';
        bloc.style.height = '50px';
        bloc.style.overflow = 'hidden';
        bloc.style.top = -100 + 'px';
        bloc.style.left = Math.random()*(1000-1) + 'px';
        document.getElementById('ecranDeJeu').appendChild(bloc);
        var imageEnnemi = document.createElement('img');
        imageEnnemi.src = 'img/asteroid.gif';
        imageEnnemi.style.position = 'absolute';
        imageEnnemi.style.display = 'block';
        document.getElementById(bloc.id).appendChild(imageEnnemi);
        tableauAsteroideBoss.push(bloc);
        compteurEnnemi++;
        return this;
      };

  /*------------------------------------------------------------------FONCTIONS DEPLACEMENTS DES ELEMENTS------------------------------------------------------------------*/

      deplacement = function(){
        rng = Math.random()*(20000-3000);
        $(tableauEnnemi).animate({left:"-200px"},Math.ceil(rng));
      };

      deplacementTir = function(){
        $(tableauTir).animate({left:innerWidth+100+"px"},800);
      };

      deplacementMissile = function(){
        $(tableauMissile).animate({left:innerWidth+100+"px"},1500);
      };

      deplacementTirBoss = function(){
        var posHeroLeft = Math.ceil(parseFloat(document.body.children[0].children[2].style.left));
        var posHeroTop = Math.ceil(parseFloat(document.body.children[0].children[2].style.top));
        $(tableauTirBoss).animate({left:posHeroLeft+"px",top:posHeroTop+55+"px"},800);
      };

      deplacementAsteroideBoss = function(){
        $(tableauAsteroideBoss).animate({top:"2000px"},5000);
      };

      deplacementLaserBoss = function(){
        $(tableauLaserBoss).animate({left:"-2500px"},800);
      };

      var deplacer = function(){
        document.body.children[0].children[1].children[0].style['margin-left'] = '0px';
        var deplacer = function(){
          var a = document.body.children[0].children[1].children[0].style['margin-left'] = parseFloat(document.body.children[0].children[1].children[0].style['margin-left']) - 5 + 'px';
          if(parseFloat(document.body.children[0].children[1].children[0].style['margin-left']) <= -3000)
            document.body.children[0].children[1].children[0].style['margin-left'] = '0px';
        };
        fondID = setInterval(deplacer, 50);
      };

  /*-------------------------------------------------------------------------GESTION DES COLLISIONS-------------------------------------------------------------------------*/

      var collision = function(){
        vieID = setInterval(function(){
          for(index in tableauEnnemi){
            var leftPos = parseFloat($(tableauEnnemi[index]).css('left'));
            var topPos = parseFloat($(tableauEnnemi[index]).css('top'));
            var leftMaPos = Math.ceil(parseFloat(document.body.children[0].children[2].style.left));
            var topMaPos = Math.ceil(parseFloat(document.body.children[0].children[2].style.top));
            if((leftMaPos >= leftPos + 150) || (leftMaPos + 140 <= leftPos) || (topMaPos >= topPos + 100)  || (topMaPos + 88 <= topPos)){
              if(leftPos<0){
                $(tableauEnnemi[index]).stop().remove();
                tableauEnnemi.splice(index,1);
              }
            }else{
              $('#personnage').effect("pulsate",500);
              $(tableauEnnemi[index]).stop().remove();
              tableauEnnemi.splice(index,1);
              nbVie-=1;
              $('#pointDeVie').html(nbVie);
              if($('#pointDeVie').html() == 0){
                $('#toto').attr("src","img/explos.gif");
                document.getElementById('explo').play();
                arreter();
                clearInterval(intervalID);
                clearInterval(intervalID1);
                clearInterval(fondID);
                clearInterval(vieID);
                clearInterval(scoreID);
                setTimeout(function(){
                  $('#toto').css("display","none");
                  $('#mort').fadeIn(2000);
                },2000);
              }
            }
          }
        },20);
      };

      var collisionTirBoss = function(){
       tirBossID = setInterval(function(){
         for(index in tableauTirBoss){
            var leftPos = parseFloat($(tableauTirBoss[index]).css('left'));
            var topPos = parseFloat($(tableauTirBoss[index]).css('top'));
            var leftMaPos = Math.ceil(parseFloat(document.body.children[0].children[2].style.left));
            var topMaPos = Math.ceil(parseFloat(document.body.children[0].children[2].style.top));
            if((leftMaPos >= leftPos + 800) || (leftMaPos + 150 <= leftPos) || (topMaPos >= topPos + 25)  || (topMaPos + 50 <= topPos)){
              setTimeout(function(){
                $(tableauTirBoss[index]).stop().remove();
                tableauTirBoss.splice(index,1);
              },800)
            }else{
              $('#personnage').effect("pulsate",500);
              $(tableauTirBoss[index]).stop().remove();
              tableauTirBoss.splice(index,1);
              nbVie-=1;
              $('#pointDeVie').html(nbVie);
              if($('#pointDeVie').html() <= 0){
                nbVie=0;
                $('#pointDeVie').html(nbVie);
                $('#toto').attr("src","img/explos.gif");
                document.getElementById('explo').play();
                clearInterval(tirBossID);
                clearInterval(laserBossID);
                clearInterval(asteroidBossID);
                clearInterval(attaqueID);
                clearInterval(vieID);
                clearInterval(scoreID);
                setTimeout(function(){
                  $('#toto').css("display","none");
                  $('#mort').fadeIn(2000);
                },2000)
              }
            }
          }
        },20);
      };

      var collisionAsteroideBoss = function(){
       asteroidBossID = setInterval(function(){
         for(index in tableauAsteroideBoss){
            var leftPos = parseFloat($(tableauAsteroideBoss[index]).css('left'));
            var topPos = parseFloat($(tableauAsteroideBoss[index]).css('top'));
            var leftMaPos = Math.ceil(parseFloat(document.body.children[0].children[2].style.left));
            var topMaPos = Math.ceil(parseFloat(document.body.children[0].children[2].style.top));
            if((leftMaPos >= leftPos + 50) || (leftMaPos + 140 <= leftPos) || (topMaPos >= topPos + 100)  || (topMaPos + 50 <= topPos)){
              if(topPos>innerHeight){
                $(tableauAsteroideBoss[index]).stop().remove();
                tableauAsteroideBoss.splice(index,1);
              }
            }else{
              $('#personnage').effect("pulsate",500);
              $(tableauAsteroideBoss[index]).stop().remove();
              tableauAsteroideBoss.splice(index,1);
              nbVie-=5;
              $('#pointDeVie').html(nbVie);
              if($('#pointDeVie').html() <= 0){
                nbVie=0;
                $('#pointDeVie').html(nbVie);
                $('#toto').attr("src","img/explos.gif");
                document.getElementById('explo').play();
                clearInterval(tirBossID);
                clearInterval(laserBossID);
                clearInterval(asteroidBossID);
                clearInterval(attaqueID);
                clearInterval(vieID);
                clearInterval(scoreID);
                 setTimeout(function(){
                  $('#toto').css("display","none");
                  $('#mort').fadeIn(2000);
                },2000)
              }
            }
          }
        },20);
      };

      var collisionLaserBoss = function(){
       laserBossID = setInterval(function(){
          for(index in tableauLaserBoss){
            var leftPos = parseFloat($(tableauLaserBoss[index]).css('left'));
            var topPos = parseFloat($(tableauLaserBoss[index]).css('top'));
            var leftMaPos = Math.ceil(parseFloat(document.body.children[0].children[2].style.left));
            var topMaPos = Math.ceil(parseFloat(document.body.children[0].children[2].style.top));
            if((leftMaPos >= leftPos + 800) || (leftMaPos + 50 <= leftPos) || (topMaPos >= topPos + 70)  || (topMaPos + 100 <= topPos)){
              if(leftPos<-100){
                $(tableauLaserBoss[index]).stop().remove();
                tableauLaserBoss.splice(index,1);
              }
            }else{
              $('#personnage').effect("pulsate",500);
              $(tableauLaserBoss[index]).stop().remove();
              tableauLaserBoss.splice(index,1);
              nbVie-=10;
              $('#pointDeVie').html(nbVie);
              if($('#pointDeVie').html() <= 0){
                nbVie=0;
                $('#pointDeVie').html(nbVie);
                $('#toto').attr("src","img/explos.gif");
                document.getElementById('explo').play();
                arreter();
                clearInterval(tirBossID);
                clearInterval(laserBossID);
                clearInterval(asteroidBossID);
                clearInterval(attaqueID);
                clearInterval(vieID);
                clearInterval(scoreID);
                setTimeout(function(){
                  $('#toto').css("display","none");
                  $('#mort').fadeIn(2000);
                },2000)
              }
            }
          }
        },20);
      };

      var collisionBoss = function(){
        collisionBossID = setInterval(function(){
          for(index in tableauTir){
            var leftPosTir = parseFloat($(tableauTir[index]).css('left'));
            var topPosTir = parseFloat($(tableauTir[index]).css('top'));
            var leftPosBoss = Math.ceil(parseFloat($(tableauBoss[0]).css('left')));
            var topPosBoss = Math.ceil(parseFloat($(tableauBoss[0]).css('top')));
            if((leftPosTir >= leftPosBoss + 655) || (leftPosTir - 215 <= leftPosBoss) || (topPosTir >= topPosBoss + 420)  || (topPosTir + 25 <= topPosBoss)){
              if(leftPosTir>innerWidth){
                $(tableauTir[index]).stop().remove().css('display','none').remove();
                tableauTir.splice(index,1);
              }
            }else{
              if(armure>0){
                armure = $('#armure').html()-1;
                $('#armure').html(armure);
                $(tableauTir[index]).stop().remove().css('display','none').remove();
                tableauTir.splice(index,1);
              }else{
                vie =  $('#pv').html()-1;
                $('#pv').html(vie);
                $(tableauTir[index]).stop().remove().css('display','none').remove();
                tableauTir.splice(index,1);
                if(vie <= 0){
                  vie = 0;
                  $('#pv').html(vie);
                  clearInterval(collisionBossID);
                  clearInterval(tirBossID);
                  clearInterval(laserBossID);
                  clearInterval(asteroidBossID);
                  clearInterval(vieID);
                  clearInterval(attaqueID);
                  clearInterval(scoreID);
                  $(tableauBoss[0]).effect("pulsate",5000).delay().effect("explode",5000);
                  setTimeout(function(){
                    generique();
                  },12000)
                }
              }
            }
          }
        },20);
      };

      var collisionMissileBoss = function(){
        collisionBossID = setInterval(function(){
          for(index in tableauMissile){
            var leftPosTir = parseFloat($(tableauMissile[index]).css('left'));
            var topPosTir = parseFloat($(tableauMissile[index]).css('top'));
            var leftPosBoss = Math.ceil(parseFloat($(tableauBoss[0]).css('left')));
            var topPosBoss = Math.ceil(parseFloat($(tableauBoss[0]).css('top')));
            if((leftPosTir >= leftPosBoss + 655) || (leftPosTir - 215 <= leftPosBoss) || (topPosTir >= topPosBoss + 420)  || (topPosTir + 25 <= topPosBoss)){
              if(leftPosTir>innerWidth){
                $(tableauMissile[index]).stop().remove().css('display','none').remove();
                tableauMissile.splice(index,1);
              }
            }else{
              if(armure>0){
                armure = $('#armure').html()-10;
                $('#armure').html(armure);
                $(tableauMissile[index]).stop().remove().css('display','none').remove();
                tableauMissile.splice(index,1);
              }else{
                vie =  $('#pv').html()-10;
                $('#pv').html(vie);
                $(tableauMissile[index]).stop().remove().css('display','none').remove();
                tableauMissile.splice(index,1);
                if(vie <= 0){
                  vie = 0;
                  $('#pv').html(vie);
                  clearInterval(tirBossID);
                  clearInterval(laserBossID);
                  clearInterval(asteroidBossID);
                  clearInterval(vieID);
                  clearInterval(attaqueID);
                  clearInterval(scoreID);
                  clearInterval(collisionBossID);
                  $(tableauBoss[0]).effect("pulsate",5000).delay().effect("explode",5000);
                  setTimeout(function(){
                    generique();
                  },12000)
                }
              }
            }
          }
        },20);
      };

  /*-----------------------------------------------------------------------FONCTIONS POP DES ELEMENTS-----------------------------------------------------------------------*/

      var attaque = function(){
        var rnd = Math.random()*(100-1);
        if(rnd<30){
          tirBoss();
          deplacementTirBoss();
        }
        if(rnd>30 && rnd<60){
          tirBoss();
          deplacementTirBoss();
          asteroideBoss();
          asteroideBoss();
          asteroideBoss();
          asteroideBoss();
          asteroideBoss();
          deplacementAsteroideBoss();
        }
        if(rnd>60){
          laserBoss();
          deplacementLaserBoss();
        }
      };

      var pope = function(){
        intervalID = setInterval(function(){
          compteur = compteur + 1;
          ennemi();
          rng = Math.random()*(1000-10000);
          deplacement();
        },2000);
      };

      var popa = function(){
        intervalID1 = setInterval(function(){
          compteur = compteur + 1;
          asteroide();
          deplacement();
        },1000);
      };

  /*----------------------------------------------------------------------------AUTRES FONCtiONS----------------------------------------------------------------------------*/

      var generique = function(){
        $('#generique').css('display','block');
        $('#generique').animate({top:"-2000"},10000);
        setTimeout(function(){
          $('#ndc').fadeIn("slow");
          $('#fb').fadeIn("slow");
          $('#lk').fadeIn("slow");
        },10000);
      };

      var recommencer = function(){
        location.reload();
      };

      var score = function(){
        scoreID = setInterval(function(){
          point +=100;
          variable +=100;
          rep+=1;
          $('#score').html(point);
          if( variable == 1000 && point<=10001){
            mis+=1;
            document.body.children[0].children[0].children[2].children[compteurScore].style.display = 'inline-block';
            $(document.body.children[0].children[0].children[2].children[compteurScore]).animate({left:pasComp},2000);
            $('#reparation').html(rep+'%');
            $('#missile').html(mis);
            compteurScore++;
            pasComp = pasComp  + 60;
            variable = 0;
          }
          if(point == 10000){
            document.getElementById('jeux').pause();
            tableauEnnemi=[];
            boss();
            collisionMissileBoss();
            collisionBoss();
            collisionAsteroideBoss();
            collisionTirBoss();
            collisionLaserBoss();
            document.getElementById('bos').play();
            $('#vieBoss').fadeIn(5000);
            setTimeout(function(){
              $('#boss').animate({left:innerWidth-450+'px'},4000);
              attaqueID = setInterval(function(){
                attaque();
              },1000);
            },8000);
            clearInterval(intervalID1);
            clearInterval(intervalID);
            clearInterval(fondID);
          }
        },1000);
      };

  //-----------------------------------------------------------------------LANCEMENT DU JEU--------------------------------------------------------------------------------//

      $('document').ready(function(){
        $('#start').on('click',function(e){
          e.preventDefault();
          $('section').fadeOut("slow");
          $('nav').hide("explode");
          $('#ecranDeJeu').css('display','block');
          $('#laPorte').css('display','block');
          setTimeout(function(){
            document.getElementById('audio').play();
            $('#porte').animate({top:"-3000px"},2000);
            setTimeout(function(){
              document.getElementById('dec').play();
            },800);
          },2000);
          setTimeout(function(){
            idHangar = setInterval(function(){
              if(pas > 10){
                clearTimeout(idHangar);
                $('#hangar').fadeOut("fast");
                setTimeout(function(){
                  document.getElementById('dec').pause();
                },3000);
              }
              pas+=0.1;
              $('#hangar').css({transform:'scale(' + pas + ')'});
            },10);
          },8000);
          setTimeout(function(){
            document.getElementById('jeux').play();
            $('#personnage').css('display','block');
            document.body.children[0].children[2].style.top = window.innerHeight/2 + 'px';
            document.body.children[0].children[2].style.left = window.innerWidth/8 + 'px';
            deplacer();
            pope();
            popa();
            collision();
            score();
          },9000);
        });
      });

  //---------------------------------------------------------------REDIMENSIONNEMENT DE LA TAILLE DE L'IMAGE----------------------------------------------------------------//

      window.onresize = function(){
        document.body.children[0].style.width = window.innerWidth + 'px';
        document.body.children[0].style.height = window.innerHeight + 'px';
        document.body.children[0].children[2].style.top = window.innerHeight/2 + 'px';
        document.body.children[0].children[2].style.left = window.innerWidth/8 + 'px';
      };

      var arreter =   function (){
        arreterID = setInterval(function(){
          for (index in tableauEnnemi){
            $(tableauEnnemi).stop();
          }
          for (index in tableauTir){
            $(tableauTir).stop();
          }
          for (index in tableauTirBoss){
            $(tableauTirBoss).stop();
          }
          for (index in tableauAsteroideBoss){
            $(tableauAsteroideBoss).stop();
          }
          for (index in tableauLaserBoss){
            $(tableauLaserBoss).stop();
          }
        },10);
      };
  //-------------------------------------------------------------GESTION DES DEPLACEMENTS----------------------------------------------------------------------------------//

      $(window).keydown(function(clavier){
        if(activeClavier){
        switch(clavier.keyCode){

          case 38:
            var haut = function(){
              if(parseFloat(document.body.children[0].children[2].style.top) >=  0){
                document.body.children[0].children[2].style.top = parseFloat(document.body.children[0].children[2].style.top) - 10 +'px';
              }
            };
            if(moveHaut){
              hautID = setInterval(haut,20);
              moveHaut = false;
            }
          break;

          case 37:
            var gauche = function(){
              if(parseFloat(document.body.children[0].children[2].style.left) >= 0){
                document.body.children[0].children[2].style.left = parseFloat(document.body.children[0].children[2].style.left) - 10 +'px';
              }
            };
            if(moveGauche){
              gaucheID = setInterval(gauche,20);
              moveGauche = false;
            }
          break;

          case 40:
            var bas = function(){
              if(parseFloat(document.body.children[0].children[2].style.top) <= innerHeight - 110){
                document.body.children[0].children[2].style.top = parseFloat(document.body.children[0].children[2].style.top) + 10 +'px';
              }
            };
            if(moveBas){
              basID = setInterval(bas,20);
              moveBas = false;
            }
          break;

          case 39:
            var droite = function(){
              if(parseFloat(document.body.children[0].children[2].style.left) <= innerWidth - 150){
                document.body.children[0].children[2].style.left = parseFloat(document.body.children[0].children[2].style.left) + 10 +'px';
              }
            };
            if(moveDroite){
              droiteID = setInterval(droite,20);
              moveDroite = false;
            }
          break;

          case 32:
            if(point > 10000 && $('#missile').html() > 0){
              missile();
              deplacementMissile();
              mis-=1;
              $('#missile').html(mis);
            }
          break;

          case 17:
            if(point > 10000){
              if(xx){
              // document.getElementById('tir').play();
              tir();
              deplacementTir();
              xx = false;
            }
            }
          break;

          case 27:

            $('#touche').css('backgroundColor','white');
            setTimeout(function(){
              $('#touche').css('backgroundColor','black');
            },50);
            if($('#pause').css('display') == 'none'){
              $('#pause').css('display','block');
              $('#menuPause').css('display','block');
              if($('#ecranDeJeu').css('display') == 'block'){
                arreter();
                clearInterval(intervalID);
                clearInterval(intervalID1);
                clearInterval(fondID);
                clearInterval(vieID);
                clearInterval(scoreID);
              }
            }
          break;
        }
        }
      });

      $(window).keyup(function(clavier){

        switch(clavier.keyCode){

          case 38:
            clearInterval(hautID);
            moveHaut = true;
          break;

          case 37:
            clearInterval(gaucheID);
            moveGauche = true;
          break;

          case 40:
            clearInterval(basID);
            moveBas = true;
          break;

          case 39:
            clearInterval(droiteID);
            moveDroite = true;
          break;

          case 17:
            if(point > 10000){
              xx = true;
              // document.getElementById('tir').currentTime = 0;
            }
          break;

        }
      });

  /*---------------------------------------------------------------------------INTERACTIONS MENU---------------------------------------------------------------------------*/

      $('#lancerLeJeu').click(function(){
        $('h2').hide("slide");
        $('#moi').hide("fold");
        $('#cv').fadeOut("slow");
        $('#real').hide("fold");
        setTimeout(function(){
          $('#nom').show("fold");
          $('#nom').css('display','inline-block');
        },500);
      });

      $('#quiSuisJe').click(function(){
        $('h2').hide("slide");
        $('#nom').hide("fold");
        $('#cv').fadeOut("slow");
        $('#real').hide("fold");
        setTimeout(function(){
          $('#moi').show("fold");
          $('#moi').css('display','inline-block');
        },500);
      });

      $('#monCv').click(function(){
        $('h2').hide("slide");
        $('#moi').hide("fold");
        $('#nom').hide("fold");
        $('#real').hide("fold");
        setTimeout(function(){
          $('#cv').fadeIn("fold");
        },500);
      });

      $('#mesReal').click(function(){
        $('h2').hide("slide");
        $('#moi').hide("fold");
        $('#nom').hide("fold");
        $('#cv').fadeOut("slow");
        setTimeout(function(){
          $('#real').show("fold");
          $('#real').css('display','inline-block');
        },500);
      });

      $('#chaiNous').click(function(){
        if(parseFloat($('#chaiNous').css('height')) == 350){
          $('#chaiNous').css('width','769px');
          $('#chaiNous').css('height','400px');
          $('#chaiNous').css('background-image','url(img/fondchai.png)');
          $('#chaiNous>p').css('display','none');
          $('#chaiNous>img').css('display','none');
          $('#chaiNous>a').css('display','none');
          $('#ceSite').css('display','none');
        }else{
          $('#chaiNous').css('width','45%');
          $('#chaiNous').css('height','350px');
          $('#chaiNous').css('background-image','url()');
          $('#chaiNous>p').css('display','block');
          $('#chaiNous>img').css('display','block');
          $('#chaiNous>a').css('display','block');
          $('#ceSite').css('display','inline-block');
        }
      });

      $('h1').click(function(){
        $('#real').hide("fold");
        $('#moi').hide("fold");
        $('#nom').hide("fold");
        $('#cv').fadeOut("slow");
        setTimeout(function(){
          $('h2').show("slide");
        },500);
      });

  /*-------------------------------------------------------------------------------MENU PAUSE-------------------------------------------------------------------------------*/

      $('#mort>h3').click(function(){
        recommencer();
      });

      $('#continuer').click(function(){
        $('#pause').css('display','none');
        $('#menuPause').css('display','none');
        if($('#ecranDeJeu').css('display') == 'block' && point < 1000){
          popa();
          pope();
          deplacer();
          collision();
          score();
          clearInterval(arreterID);
        }
        if($('#ecranDeJeu').css('display') == 'block' && point >= 1000){
          score();
          attaque();
          deplacementTirBoss();
          deplacementLaserBoss();
          deplacementLaserBoss();
          collisionBoss();
          collisionAsteroideBoss();
          collisionTirBoss();
          collisionLaserBoss();
          clearInterval(arreterID);
        }
      });

      $('#fin').click(function(){
        $('#pause').css('display','none');
        $('#menuPause').css('display','none');
        generique();
      });

      $('#site').click(function(){
        $('#generique').fadeOut(1000);
        setTimeout(recommencer,2000);
        // $('#generique>img').fadeOut("slow");
        // $('#fb').fadeOut('slow');
        // $('#lk').fadeOut('slow');
        // $('#generique').css('top','900px');
      });

      $('#commandes').click(function(){
        if($('#ecranDesTouches').css('display') == 'none' ){
          $('#ecranDesTouches').css('display','block');
        }else{
          $('#ecranDesTouches').css('display','none');
        }
      });

      $('#ecranDesTouches').click(function(){
        $('#ecranDesTouches').css('display','none');
      });

      $('#touche').click(function(){
        $('#touche').css('backgroundColor','white');
        setTimeout(function(){
          $('#touche').css('backgroundColor','black');
        },50);
        if($('#pause').css('display') == 'none' ){
          $('#pause').css('display','block');
          $('#menuPause').css('display','block');
          if($('#ecranDeJeu').css('display') == 'block'){
            arreter();
            clearInterval(intervalID);
            clearInterval(intervalID1);
            clearInterval(fondID);
            clearInterval(vieID);
            clearInterval(scoreID);
          }
        }
      });

      $('#son').click(function(){
        if($('#sonp').html() == '||'){
          $('#son').css('backgroundColor','white');
          setTimeout(function(){
            $('#son').css('backgroundColor','black');
          },50);
          $('#sonp').html('>');
          document.getElementById('audio').volume = 0;
          document.getElementById('dec').volume = 0;
          document.getElementById('bos').volume = 0;
          document.getElementById('jeux').volume = 0;
        }else{
          $('#son').css('backgroundColor','white');
          setTimeout(function(){
            $('#son').css('backgroundColor','black');
          },50);
          $('#sonp').html('||');
          document.getElementById('audio').volume = 1;
          document.getElementById('dec').volume = 1;
          document.getElementById('bos').volume = 1;
          document.getElementById('jeux').volume = 1;
        }
      });

  /*-----------------------------------------------------------------------ANIMATION VAISSEAU HEADER-----------------------------------------------------------------------*/

      var spriteVaisseau = function(){
        var spriteID = setInterval(function(){
          if(pasSprite < 0.1){
            clearInterval(spriteID);
            $('#sprite').css('display','none');
          }
          pasSprite-=0.01;
          $('#sprite').css({transform:'scale(' + pasSprite + ')'},10);
        },100);
        $('#sprite').animate({left: 0 + 'px'},12000);
      };

      spriteVaisseau();

      setInterval(function(){
        pasSprite = 1;
        $('#sprite').css({'display':'inline-block','left':'1500px','transform':'scale(1)'});
        spriteVaisseau();
      },25000);

      $('#sprite').click(function(){
        nbVie = 999;
        $('#pointDeVie').html(nbVie);
      });

});
