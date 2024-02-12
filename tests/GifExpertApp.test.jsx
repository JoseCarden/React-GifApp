import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp/>', () => { 
   
    test('debe ser igual al snapshot', () => { 
        
        const {container} = render(<GifExpertApp/>);
        expect(container).toMatchSnapshot();

    });

    test('debe de actualizarse el inputValue cuando se escribe en el input y agregar una nueva categoria si no es repetida', () => { 
        
        const iValue = 'Dragon Ball';
        const onAddCategory  = jest.fn();

        render(<GifExpertApp onNewCategory={onAddCategory}/>)

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        //evalua que el inputvalue se está actualizando correctamente
        fireEvent.input(input, {target: {value: iValue}});
        expect(input.value).toBe(iValue);

        //evalua que se ha agregado una nueva categoría
        fireEvent.submit(form);
        expect(screen.getAllByRole('heading').length).toBe(5);

    });

    test('no debe introducir nada si es la misma categoria', () => { 
        
        const iValue = 'Jujutsu Kaisen';

        render(<GifExpertApp />)

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: iValue}});
        fireEvent.submit(form);

        expect(screen.getAllByRole('heading').length).toBe(3);

    });

});