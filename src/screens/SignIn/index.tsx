import React from 'react';
import { StatusBar } from 'react-native';

import { Button } from '../../components/Button';

import theme from '../../styles/theme';

import {
    Container,
    Header,
    Title,
    SubTitle,
    Footer,
} from './styles';

export function SignIn() {

    return (
        <Container>
            <StatusBar
                barStyle='dark-content'
                backgroundColor='transparent'
                translucent
            />
            <Header>
                <Title>
                    Estamos{'\n'}quase lá.
                </Title>

                <SubTitle>
                    Faça seu login para começar{'\n'}
                    uma experiência incrível.
                </SubTitle>
            </Header>

            <Footer>
                <Button
                    title='Login'
                    onPress={() => { }}
                    enabled={false}
                    loading={false}
                />

                <Button
                    title="Criar conta gratuita"
                    onPress={() => { }}
                    color={theme.colors.background_secondary}
                    enabled={true}
                    loading={false}
                    light
                />
            </Footer>
        </Container>
    );
}