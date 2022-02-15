import { useState } from 'react';
import { Container } from '@material-ui/core';
import Body from '../bodyComponent';
import Meaning from '../meaningContainer';
import Header from '../../../common/components/header';

function MainComponent() {
    const [word, setWord] = useState('');
    const [data, setData] = useState([]);
    const [category, setCategory] = useState('en');
    const [dataisset, setDataisset] = useState(false);

    const getData = () => {
        if (word !== '') {
            const url = `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`;

            fetch(url)
                .then((response) => {
                    if (response.ok) {
                        //console.log(response);
                        return response.json();
                    } else {
                        console.log('Error fetching');
                    }
                })
                .then((data) => {
                    //console.log(data);
                    setData(data);
                    setDataisset(true);
                    //console.log(data[0].phonetics[0].audio);
                });
        }
    };

    return (
        <div
            className="App"
            style={{
                height: '100vh',
                backgroundColor: '#282c34',
                color: 'white',
            }}
        >
            <Header />
            <Container
                maxWidth="md"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100vh',
                }}
            >
                <Body
                    category={category}
                    setCategory={setCategory}
                    word={word}
                    setWord={setWord}
                    getData={getData}
                    setDataisset={setDataisset}
                />
                {data && (
                    <Meaning
                        word={word}
                        data={data}
                        category={category}
                        dataisset={dataisset}
                    />
                )}
            </Container>
        </div>
    );
}

export default MainComponent;
