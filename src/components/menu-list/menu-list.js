import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux';
import WithRestoService from '../hoc';
import {menuLoaded, menuRequested, addedToCart} from '../../actions';
import Spinner from '../spinner';
import './menu-list.scss';


class MenuList extends Component {
    componentDidMount(){
        this.props.menuRequested();
        const {RestoService} = this.props;
        RestoService.getMenuItems()
             .then( res => this.props.menuLoaded(res))
             .catch(error => {console.log('Произошла ошибка')})

    }

    render() {
        const{menuItems, loading,addedToCart} = this.props;
        if (loading) {
           return  <Spinner />
        }
        return (
            <ul className="menu__list">
                {menuItems.map(menuItem => {
                    return <MenuListItem  key={menuItem.id} menuItem={menuItem} onAddToCart={()=> addedToCart(menuItem.id)}/>
                })}

            </ul>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loding
    }
}

const mapDispathToProps = {
        menuLoaded,
        menuRequested,
        addedToCart
    
};

export default WithRestoService ()( connect(mapStateToProps, mapDispathToProps) (MenuList));