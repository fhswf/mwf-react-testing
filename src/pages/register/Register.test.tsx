import '@testing-library/jest-dom/vitest';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import axios from 'axios';
//import * as authActions from "../../features/auth/authActions";
import { Register } from './Register';
import { setupStore } from '../../store';


//vi.mock('axios');

/*
vi.mock('../../features/auth/authActions', async () => {
    
    const actual = await vi.importActual<any>('../../features/auth/authActions');

    return {
        ...actual,
        registerUser: vi.fn() /* {
            pending: vi.fn(() => ({ type: 'auth/registerUser/pending' })),
            fulfilled: vi.fn((payload) => ({ type: 'auth/registerUser/fulfilled', payload })),
            rejected: vi.fn((error) => ({ type: 'auth/registerUser/rejected', error })),
            async (args) {
                return {
                    type: 'auth/registerUser/fulfilled',
                    payload: {}
                }
            }
        }*
    }
});
*/

//const { registerUser } = require('../../features/auth/authActions');

function renderWithProviders(
    ui: React.ReactNode,
    {
        preloadedState,
        ...renderOptions
    } = {},
) {
    function Wrapper({ children }: { children: React.ReactNode}) {
        return (
            <Provider store={setupStore(preloadedState)}>
                {children}
            </Provider>
        );
    }

    return render(ui, { wrapper: props => <Wrapper {...props} />, ...renderOptions });

  }

describe('Register', () => {

    it('show errors when form is empty', async () => {
        
        renderWithProviders(<Register />, {
            preloadedState: {
                auth: {
                    loading: false,
                    userInfo: null,
                    accessToken: null,
                    error: null,
                    success: false,
                },
            }
        });

        const submit = screen.getByText('Register');
        fireEvent.click(submit);

        expect(await screen.findByText('Vorname ist erforderlich')).toBeInTheDocument();
        expect(await screen.findByText('Nachname ist erforderlich')).toBeInTheDocument();
        expect(await screen.findByText('E-Mail ist erforderlich')).toBeInTheDocument();
        expect(await screen.findByText('Passwort ist erforderlich')).toBeInTheDocument();

    });

    it ('show error when e-mail is incorrect', async () => {

        renderWithProviders(<Register />, {
            preloadedState: {
                auth: {
                    loading: false,
                    userInfo: null,
                    accessToken: null,
                    error: null,
                    success: false,
                },
            }
        });

        await userEvent.type(screen.getByRole('textbox', { name: /e-mail/i }), 'max-mustermann.com');

        const submit = screen.getByText('Register');
        fireEvent.click(submit);

        expect(await screen.findByText('Ungültige E-Mail-Adresse')).toBeInTheDocument();
        
    });

    it('show formdata in console when form is valid', async () => {

        const mockedConsoleLog = vi.spyOn(console, 'log');

        /*
        const mockedPost = vi.mocked(axios.post).mockResolvedValue({
            data: {},
            status: '200'
        });
        */

        const mockedPost = vi.spyOn(axios, 'post').mockResolvedValue({
            data: {
                success: true
            },
            status: 201
        });

        renderWithProviders(<Register />, {
            preloadedState: {
                auth: {
                    loading: false,
                    userInfo: null,
                    accessToken: null,
                    error: null,
                    success: false,
                },
            }
        });

        await userEvent.type(screen.getByRole('textbox', { name: /vorname/i }), 'Max');
        await userEvent.type(screen.getByRole('textbox', { name: /nachname/i }), 'Mustermann');
        await userEvent.type(screen.getByRole('textbox', { name: /e-mail/i }), 'max@mustermann2.com');
        await userEvent.type(screen.getByLabelText('Passwort'), '12345678');

        const submit = screen.getByText('Register');

        await userEvent.click(submit);

        expect(mockedConsoleLog).toHaveBeenCalledTimes(2);

        expect(mockedPost).toHaveBeenCalledOnce();

        expect(mockedPost).toHaveBeenCalledWith('http://localhost:3001/register', {
            email: 'max@mustermann2.com',
            firstName: 'Max',
            lastName: 'Mustermann',
            password: '12345678'
        });

        mockedConsoleLog.mockRestore();
        mockedPost.mockRestore();
        
    });

})