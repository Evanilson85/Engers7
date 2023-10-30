import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  CarouselContainer,
  Slide,
  VideoBackground,
  Image,
  Overlay,
  Text,
  Button,
} from './style'; // Certifique-se de ajustar o caminho do import conforme necessário

import imagen1 from '../../../assets/imagen1.png'

export const Carousel = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 300,
      adaptiveHeight: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      fade: true,
      cssEase: 'linear',
      arrows: false
    };
  
    const slides = [
      {
        // type: 'video',
        type: 'image',
        // url: 'seu-video.mp4',
        url: imagen1,
        text: 'Seu Texto de Overlay para Vídeo',
      },
      {
        type: 'image',
        url: imagen1,
        // text: 'Seu Texto de Overlay para Imagem 1',
      },
      {
        type: 'image',
        url: imagen1,
        // text: 'Seu Texto de Overlay para Imagem 2',
      },
    ];
  
    return (
      <CarouselContainer>
        <Slider {...settings} >
          {slides.map((slide, index) => (
            <Slide key={index} className='subContainer'>
              {slide.type === 'video' ? (
                <VideoBackground autoPlay loop muted>
                  <source src={slide.url} type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </VideoBackground>
              ) : (
                <Image src={slide.url} alt={`Slide ${index + 1}`} />
              )}
              <Overlay>
                <Text>{slide?.text}</Text>
                {slide?.text &&
                <Button>Seu Botão</Button>
                }
              </Overlay>
            </Slide>
          ))}
        </Slider>
      </CarouselContainer>
    );
  };
  

