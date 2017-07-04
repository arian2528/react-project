import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
	

	render() {

		let heading = "Soaring to new heights";
		let subheading = "My subheading";

		return (
			<div>
				<section className="hero">
			      <div className="hero-body">
			      <div className="container">
			        <h1 className="title">{ heading }</h1>
			        <div className="is-two-thirds column is-paddingless">
			          <h2 className="subtitle is-4">{ subheading }</h2>
			        </div>
			        <a className="button is-large is-primary" id="learn">Learn more</a>
			      </div>
			      </div>
			    </section>
			    <section className="section">
			      <div className="container">
			        <div className="columns pd is-desktop">
			          <div className="column is-1 has-text-centered">
			            <i className="fa fa-cog is-primary"></i>
			          </div>
			          <div className="column is-one-third-desktop has-text-centered">
			            <p className="title"><strong>We provided superior business</strong></p>
			          </div>
			          <div className="column">
			            <p>Lorem ipsum</p>
			          </div>
			        </div>
			        <div className="column pd">
			          <div className="column">
			            <div className="card">
			              <div className="card-content">
			                <p className="title">The best of the best</p>
			                <p className="subtitle">Arian Buzon</p>
			              </div>
			            </div>
			          </div>
			          <div className="column">
			            <div className="card">
			              <div className="card-content">
			                <p className="title">The best of the best</p>
			                <p className="subtitle">Arian Buzon</p>
			              </div>
			            </div>
			          </div>
			          <div className="column">
			            <div className="card">
			              <div className="card-content">
			                <p className="title">The best of the best</p>
			                <p className="subtitle">Arian Buzon</p>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </section>
			</div>
		);
	}
}

export default Home;