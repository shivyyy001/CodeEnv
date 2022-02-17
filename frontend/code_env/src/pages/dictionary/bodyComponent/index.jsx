import {
    TextField,
    ThemeProvider,
    createTheme,
    MenuItem,
} from '@material-ui/core';
import React from 'react';
import './styles.css';
import categories from '../../../assets/langcategories.jsx';
import Button from '../../../common/components/button';

const Body = ({
    setCategory,
    category,
    setWord,
    word,
    getData,
    setDataisset,
}) => {
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#fff',
            },
            type: 'dark',
        },
    });

    const handleChange = (language) => {
        setCategory(language);
        setWord('');
        setDataisset(false);
    };
    return (
        <div className="header">
            <div className="title-div">
                <p className="title">{word ? word : 'Word Hunt'}</p>
            </div>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField
                        className="search"
                        label="🔎 Search a word"
                        value={word}
                        onChange={(e) => {
                            setWord(e.target.value);
                            setDataisset(false);
                        }}
                    />
                    <TextField
                        className="select mx-4"
                        select
                        label="Language"
                        value={category}
                        onChange={(e) => handleChange(e.target.value)}
                    >
                        {categories.map((item) => (
                            <MenuItem key={item.label} value={item.label}>
                                {item.value}
                            </MenuItem>
                        ))}
                    </TextField>
                    <div className="d-flex justify-content-center">
                        <Button
                            label="Search"
                            className="btn btn-outline-light"
                            style={{ borderRadius: '4px' }}
                            clickHandler={getData}
                        />
                    </div>
                </ThemeProvider>
            </div>
        </div>
    );
};

export default Body;
