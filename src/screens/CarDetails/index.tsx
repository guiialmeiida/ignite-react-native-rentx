import React from 'react';

import { Acessory } from '../../components/Acessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/imageSlider';

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

import {
    Container,
    Header,
    CarImages,
    Content,
    Details,
    Description,
    Brand,
    Name,
    Rent,
    Period,
    Price,
    About,
    Acessories,
    Footer,
} from './styles';
import { Button } from '../../components/Button';

export function CarDetails() {
    return (
        <Container>
            <Header>
                <BackButton onPress={() => { }} />
            </Header>

            <CarImages>
                <ImageSlider
                    imagesUrl={['https://img1.gratispng.com/20171220/kiq/audi-png-car-image-5a3b1f1eb47de9.9104985015138240307393.jpg']}
                />
            </CarImages>

            <Content>
                <Details>
                    <Description>
                        <Brand>Lamborghini</Brand>
                        <Name>Huracan</Name>
                    </Description>

                    <Rent>
                        <Period>Ao dia</Period>
                        <Price>R$ 580</Price>
                    </Rent>
                </Details>

                <Acessories>
                    <Acessory name='300Km/h' icon={speedSvg} />
                    <Acessory name='3.2s' icon={accelerationSvg} />
                    <Acessory name='800 HP' icon={forceSvg} />
                    <Acessory name='Gasolina' icon={gasolineSvg} />
                    <Acessory name='Auto' icon={exchangeSvg} />
                    <Acessory name='2 pessoas' icon={peopleSvg} />
                </Acessories>

                <About>
                    Este é o automóvel desportivo. Surgiu do lendário touro de lide indultado
                    na praça Realm Maestranza de Sevilla. É um belissimo carro para quem gosta de acelerar.
                </About>
            </Content>

            <Footer>
                <Button title='Confirmar' />
            </Footer>

        </Container>
    );
}