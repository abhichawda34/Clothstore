import React, {Component} from 'react';
import SHOP_DATA from './shop_data';
import CollectionPreview from "../../Components/Collection-preview";

class ShopPage extends Component {
    constructor(){
        super();
        this.state ={
            collection : SHOP_DATA
        }
    }
    render(){
        return(
            <div className='shop-page'>
                {
                    this.state.collection
                    .map(({id, ...otherProps}) => (
                        <CollectionPreview key={id} {...otherProps}/>
                    ))
                }
            </div>
        );
    };
};
export default ShopPage;