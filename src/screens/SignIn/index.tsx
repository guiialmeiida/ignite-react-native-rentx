import React from 'react';
import { StatusBar } from 'react-native';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';

import theme from '../../styles/theme';

import {
    Container,
    Header,
    Title,
    Form,
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

            <Form>
                <Input
                    iconName='mail'
                    placeholder='E-mail'
                    keyboardType='email-address'
                    autoCorrect={false}
                    autoCapitalize='none'
                />

                <PasswordInput
                    iconName='lock'
                    placeholder='Senha'
                    secureTextEntry
                />
            </Form>

            <Footer>
                <Button
                    title='Login'
                    onPress={() => { }}
                    enabled={false}
                    loading={false}
                />

                <Button
                    title='Criar conta gratuita'
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