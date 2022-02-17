import React from 'react';
import './styles.css';
import Banner from '../../common/components/banner';
import Categories from '../../common/components/categories';
import Posts from '../../common/components/posts';
import Header from '../../common/components/header';

function Home() {

    return (
        <>
            <Header/>
            <Banner/>
            <div>
                <div className="row">
                    <div className="mr-2 col col-md-3 col-sm-4 col-12" id="category">
                        <Categories />
                    </div>
                    <div className="posts d-flex flex-wrap col col-md-9 col-sm-8 col-12">
                        <Posts />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
