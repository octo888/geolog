import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {compose} from "redux";
import {withNamespaces} from "react-i18next";
import './Header.css'

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    }
};

class Header extends React.Component {

    componentDidMount() {
        const mediaQuery = window.matchMedia('(min-width: 768px)');
        if (mediaQuery.matches) {
            this.setLarge()
        } else {
            this.setSmall()
        }
    }

    state = {
        auth: true,
        anchorEl: null,
    };

    handleChange = event => {
        this.setState({auth: event.target.checked});
    };

    handleMenu = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleClose = () => {
        this.setState({anchorEl: null});
    };

    setSmall = () => {
        this.setState({open: false, docked: false, mobile: true})
    };

    setLarge = () => {
        this.setState({open: true, docked: true, mobile: false})
    };

    renderMenu(anchorEl, open, classes) {
        if (this.state.mobile) {
            return (
                <React.Fragment>
                    <IconButton className={classes.menuButton}
                                onClick={this.handleMenu}
                                color="inherit" aria-label="Menu">
                        <MenuIcon/>
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={open}
                        onClose={this.handleClose}
                    >
                        <MenuItem><Link className={'dropdownLink'} to={'/'}>{this.props.t('welcome')}</Link></MenuItem>
                        <MenuItem ><Link className={'dropdownLink'} to={'/events'}>{this.props.t('events')}</Link></MenuItem>
                        <MenuItem ><Link className={'dropdownLink'} to={'/info'}>{this.props.t('info')}</Link></MenuItem>
                    </Menu>
                </React.Fragment>
            )
        } else {
            return null;
        }
    }

    renderMainLinks() {
        if (this.state.mobile) {
            return (
                <React.Fragment>
                    <Typography variant="h6" color="inherit" >
                        <Link className={'mainLink mr-3'} to={'/'}>{this.props.t('welcome')}</Link>
                    </Typography>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <Typography variant="h6" color="inherit" >
                        <Link className={'mainLink mr-3'} to={'/'}>{this.props.t('welcome')}</Link>
                    </Typography>
                    <Typography variant="h6" color="inherit" >
                        <Link className={'mainLink mr-3'} to={'/events'}>{this.props.t('events')}</Link>
                    </Typography>
                    <Typography variant="h6" color="inherit" >
                        <Link className={'mainLink'} to={'/info'}>{this.props.t('info')}</Link>
                    </Typography>
                </React.Fragment>
            )
        }
    }

    render() {
        const {classes} = this.props;
        const {auth, anchorEl} = this.state;
        const open = Boolean(anchorEl);
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        {this.renderMenu(anchorEl, open, classes)}
                        {this.renderMainLinks()}
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
};

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default compose(withNamespaces('translation'), withStyles(styles))(Header);
