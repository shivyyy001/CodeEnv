import React from 'react';
import './styles.css';

const Meaning = ({ word, category, data, dataisset }) => {
    return (
        <div className="meanings">
            {data[0] && dataisset && category === 'en' && (
                <div>
                    <audio
                        src={data[0].phonetics[0] && data[0].phonetics[0].audio}
                        style={{
                            backgroundColor: 'fff',
                            borderRadius: '10px',
                            width: '100%',
                        }}
                        controls
                    >
                        Your Browser does'nt support audio element.
                    </audio>
                </div>
            )}

            {!dataisset ? (
                <span className="subTitle">
                    Start by typing a word in search
                </span>
            ) : (
                data.map((meaning) =>
                    meaning.meanings.map((item) =>
                        item.definitions.map((finaldef, i) => (
                            //console.log(finaldef.synonyms.length)
                            <div
                                className="singleMeaning"
                                style={{
                                    backgroundColor: 'white',
                                    color: 'black',
                                }}
                                key={i}
                            >
                                <b>Meaning : {finaldef.definition}</b>
                                <hr
                                    style={{
                                        backgroundColor: 'black',
                                        width: '100%',
                                    }}
                                ></hr>
                                {item.partOfSpeech && (
                                    <span>
                                        <b>Part of speech : </b>
                                        {item.partOfSpeech}.
                                    </span>
                                )}
                                {finaldef.example && (
                                    <span>
                                        <b>Example : </b>
                                        {finaldef.example}.
                                    </span>
                                )}
                                {finaldef.synonyms.length != 0 && (
                                    <span>
                                        <b>Synonyms : </b>
                                        {finaldef.synonyms.map((s) => `${s}, `)}
                                    </span>
                                )}
                            </div>
                        ))
                    )
                )
            )}
        </div>
    );
};

export default Meaning;
