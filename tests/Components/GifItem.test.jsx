import { render } from "@testing-library/react";
import { GifItem } from '../../src/Components/GifItem'

describe('Pruebas en <GifItem/>', () => { 
    
    const title = 'Titulo';
    const url = 'https://www.youtube.com/watch?v=F8BMxX4E440&list=TLPQMTAwMjIwMjTcltn1vfZLhA&index=2';

    test('debe enviar titulo y url', () => { 
        render(<GifItem title={title} url= {url}/>)
    });

    test('debe ser igual al snapshot', () => { 

        const {container} = render(
            <GifItem 
                title={title}
                url= {url}
            />)
        expect(container).toMatchSnapshot();

     })

});
