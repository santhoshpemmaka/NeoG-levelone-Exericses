import React, {useState} from "react";
import "./HeaderMain.scss";
import homeLogo from "../../../Assests/website-name.jpg";
const HeaderMain = () => {
	const [showNav, setshowNav] = useState(false);
	const navItems = [
		{text: "Home", link: "/", hideInDesktop: false},
		{text: "Shop Now", link: "/shop", hideInDesktop: false},
		{text: "Profile", link: "/profile", hideInDesktop: true},
		{text: "Orders", link: "/profile/orders", hideInDesktop: true},
		{text: "Addresses", link: "/profile/address", hideInDesktop: true},
		{text: "Settings", link: "/profile/settings", hideInDesktop: true},
	];
	const navHandler = () => {
		setshowNav((prev) => !prev);
	};
	return (
		<div>
			<div className='container'>
				<div className='container-header'>
					<div className='navbar-logo'>
						<i className='fas fa-bars menu-icon' onClick={navHandler}></i>
						<div className='header-logo show-in-mobile'>
							<a className='header-logo-name' href='./home.html'>
								<label>NAMASTE</label>
							</a>
						</div>

						{showNav && (
							<div className='navbar-menu'>
								<ul className='nav-bar-links'>
									<li href='#' className='list-inline-item avatar-nav-link'>
										<a>
											<span>
												<i className='fas fa-user-alt user-icon'></i>
											</span>
										</a>
										<i class='fas fa-times close-icon' onClick={navHandler}></i>
									</li>
									{navItems &&
										navItems.length > 0 &&
										navItems.map((item) => (
											<li className='list-inline-item'>{item.text}</li>
										))}
								</ul>
							</div>
						)}
					</div>
					<div className='header-logo hide-in-mobile'>
						<a className='header-logo-name' href='./home.html'>
							<label>NAMASTE</label>
						</a>
					</div>
					<ul className='ul-tag-header ul-left'>
						<li className='li-tag-header hide-in-mobile'>
							<a className='a-tag-header' href='./home.html'>
								<label className='label-name'>Home</label>
							</a>
						</li>
						<li className='li-tag-header hide-in-mobile'>
							<a className='a-tag-header' href='./header.html' target='_blank'>
								<label className='label-name'>All Brands</label>
							</a>
						</li>
						<li className='li-tag-header hide-in-mobile'>
							<a className='a-tag-header' href='./header.html' target='_blank'>
								<label className='label-name'>Men</label>
							</a>
						</li>
						<li className='li-tag-header hide-in-mobile'>
							<a className='a-tag-header' href='./header.html' target='_blank'>
								<label className='label-name'>Women</label>
							</a>
						</li>
					</ul>

					<div className='right-sideheader'>
						<div className='search-bar'>
							<i className='fas fa-search search-icon'></i>
							<input
								type='text'
								className='search-text'
								placeholder='Search for products, brands'
							/>
						</div>
						<ul className='ul-tag-header ul-right'>
							<li className='li-tag-header hide-in-mobile'>
								<a className='a-tag-header-right' href='./login.html'>
									<i className='fas fa-user header-icon'></i>
									<span>Login</span>
								</a>
							</li>
							<li className='li-tag-header'>
								<a className='a-tag-header-right' href='./checkout.html'>
									<i className='fas fa-heart header-icon'></i>
									<span>Wishlist</span>
								</a>
							</li>
							<li className='li-tag-header card-header'>
								<a className='a-tag-header-right' href='./checkout.html'>
									<i className='fas fa-shopping-cart header-icon'>
										{/* {itemCount ? (
											<span className='cart-number'>{itemCount}</span>
										) : null} */}
									</i>
									<span>Cart</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderMain;
