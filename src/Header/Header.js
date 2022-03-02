import React from "react";
import {useCard} from "../CardContext";
import "./Header.css";
const Header = () => {
	const {itemCount, countHandler} = useCard();
	console.log("count", itemCount);
	return (
		<div>
			<div className='container'>
				<div className='container-header'>
					<ul className='ul-tag-header'>
						<li className='li-tag-header header-logo'>
							<a className='a-tag-header' href='./home.html'>
								<img
									className='header-image'
									src='./Assests/Images/E-commerce.png'
									alt=''
								/>
							</a>
						</li>
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
										{itemCount ? (
											<span className='cart-number'>{itemCount}</span>
										) : null}
									</i>
									<span>Cart</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class='contianer-body-main grid-3column-layout'>
				<div class='vertical-card'>
					<div class='ver-card-image'>
						<img
							class='ver-resposive-image'
							src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14702326/2021/11/25/0f2d7227-2c08-4026-b683-952a75a5a53b1637844226443HRXByHrithikRoshanU-17ActiveBoysBurgundyPrintedRapid-DryAOPT1.jpg'
							alt=''
						/>
					</div>
					<div class='verticalcard-description'>
						<h4>HRX by Snap Buy</h4>
						<p>Boys Cotton Brand Logo T-shirt</p>
						<div class='ver-card-display-price'>
							<span class='ver-price discount-price'>Rs. 599</span>
							<span class='ver-price actual-price'>Rs.1199</span>
							<span class='ver-price discount-offer'>(50% OFF)</span>
						</div>
					</div>
					<button
						class='card-ver-btn flex-items primary-add-cart'
						onClick={countHandler}>
						<i class='fas fa-shopping-cart cart-icon'></i> Add to Cart
					</button>

					<div class='card-ver-rating'>
						4.5 <i class='far fa-star'></i> | 8
					</div>
				</div>
				<div class='vertical-card'>
					<div class='ver-card-image'>
						<img
							class='ver-resposive-image'
							src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14610168/2021/11/25/18fd48b4-1a10-4e2c-b4e8-a7f8e309edc81637841657065NauticaBoysYellowNavyPureCottonBrandLogoNauticalPrintT-shirt1.jpg'
							alt=''
						/>
					</div>
					<div class='verticalcard-description'>
						<h4>HRX by Snap Buy</h4>
						<p>Boys Cotton Brand Logo T-shirt</p>
						<div class='ver-card-display-price'>
							<span class='ver-price discount-price'>Rs. 599</span>
							<span class='ver-price actual-price'>Rs.1199</span>
							<span class='ver-price discount-offer'>(50% OFF)</span>
						</div>
					</div>
					<button
						class='card-ver-btn flex-items primary-add-cart'
						onClick={countHandler}>
						<i class='fas fa-shopping-cart cart-icon'></i> Add to Cart
					</button>
					<div class='card-ver-rating'>
						4.5 <i class='far fa-star'></i> | 8
					</div>
					<div class='card-ver-new'>New</div>
				</div>
				<div class='vertical-card'>
					<div class='ver-card-image'>
						<img
							class='ver-resposive-image'
							src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14702326/2021/11/25/0f2d7227-2c08-4026-b683-952a75a5a53b1637844226443HRXByHrithikRoshanU-17ActiveBoysBurgundyPrintedRapid-DryAOPT1.jpg'
							alt=''
						/>
					</div>
					<div class='verticalcard-description'>
						<h4>HRX by Snap Buy</h4>
						<p>Boys Cotton Brand Logo T-shirt</p>
						<div class='ver-card-display-price'>
							<span class='ver-price discount-price'>Rs. 599</span>
							<span class='ver-price actual-price'>Rs.1199</span>
							<span class='ver-price discount-offer'>(50% OFF)</span>
						</div>
					</div>
					<button
						class='card-ver-btn flex-items primary-add-cart'
						onClick={countHandler}>
						<i class='fas fa-shopping-cart cart-icon'></i> Add to Cart
					</button>
					<div class='card-ver-rating'>
						4.5 <i class='far fa-star'></i> | 8
					</div>
				</div>
				<div class='vertical-card'>
					<div class='ver-card-image'>
						<img
							class='ver-resposive-image'
							src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14610168/2021/11/25/18fd48b4-1a10-4e2c-b4e8-a7f8e309edc81637841657065NauticaBoysYellowNavyPureCottonBrandLogoNauticalPrintT-shirt1.jpg'
							alt=''
						/>
					</div>
					<div class='verticalcard-description'>
						<h4>HRX by Snap Buy</h4>
						<p>Boys Cotton Brand Logo T-shirt</p>
						<div class='ver-card-display-price'>
							<span class='ver-price discount-price'>Rs. 599</span>
							<span class='ver-price actual-price'>Rs.1199</span>
							<span class='ver-price discount-offer'>(50% OFF)</span>
						</div>
					</div>
					<button
						class='card-ver-btn flex-items primary-add-cart'
						onClick={countHandler}>
						<i class='fas fa-shopping-cart cart-icon'></i> Add to Cart
					</button>
					<div class='card-ver-rating'>
						4.5 <i class='far fa-star'></i> | 8
					</div>
					<div class='card-ver-new'>New</div>
				</div>
				<div class='vertical-card'>
					<div class='ver-card-image'>
						<img
							class='ver-resposive-image'
							src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14702326/2021/11/25/0f2d7227-2c08-4026-b683-952a75a5a53b1637844226443HRXByHrithikRoshanU-17ActiveBoysBurgundyPrintedRapid-DryAOPT1.jpg'
							alt=''
						/>
					</div>
					<div class='verticalcard-description'>
						<h4>HRX by Snap Buy</h4>
						<p>Boys Cotton Brand Logo T-shirt</p>
						<div class='ver-card-display-price'>
							<span class='ver-price discount-price'>Rs. 599</span>
							<span class='ver-price actual-price'>Rs.1199</span>
							<span class='ver-price discount-offer'>(50% OFF)</span>
						</div>
					</div>
					<button
						class='card-ver-btn flex-items primary-add-cart'
						onClick={countHandler}>
						<i class='fas fa-shopping-cart cart-icon'></i> Add to Cart
					</button>
					<div class='card-ver-rating'>
						4.5 <i class='far fa-star'></i> | 8
					</div>
				</div>
				<div class='vertical-card'>
					<div class='ver-card-image'>
						<img
							class='ver-resposive-image'
							src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14610168/2021/11/25/18fd48b4-1a10-4e2c-b4e8-a7f8e309edc81637841657065NauticaBoysYellowNavyPureCottonBrandLogoNauticalPrintT-shirt1.jpg'
							alt=''
						/>
					</div>
					<div class='verticalcard-description'>
						<h4>HRX by Snap Buy</h4>
						<p>Boys Cotton Brand Logo T-shirt</p>
						<div class='ver-card-display-price'>
							<span class='ver-price discount-price'>Rs. 599</span>
							<span class='ver-price actual-price'>Rs.1199</span>
							<span class='ver-price discount-offer'>(50% OFF)</span>
						</div>
					</div>
					<button
						class='card-ver-btn flex-items primary-add-cart'
						onClick={countHandler}>
						<i class='fas fa-shopping-cart cart-icon'></i> Add to Cart
					</button>
					<div class='card-ver-rating'>
						4.5 <i class='far fa-star'></i> | 8
					</div>
					<div class='card-ver-new'>New</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
