 // propTypes: {
	//     type: _react.PropTypes.string,
	//     flipped: _react.PropTypes.bool,
	//     disabled: _react.PropTypes.bool,
	//     onFlip: _react.PropTypes.func,
	//     onKeyDown: _react.PropTypes.func,
	//     children: function children(props, propName, componentName) {
	//       var prop = props[propName];
	
	//       if (_react2['default'].Children.count(prop) !== 2) {
	//         return new Error('`' + componentName + '` ' + 'should contain exactly two children. ' + 'The first child represents the front of the card. ' + 'The second child represents the back of the card.');
	//       }
	//     }
	//   },

import React, {Component} from 'react';


class FlipCard extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
      		hasFocus: false,
	      	isFlipped: this.props.flipped
	    }	
  	
  	// getDefaultProps() {
   //  	return {
   //    		type: 'horizontal',
   //    		flipped: false,
   //    		disabled: false
   //  	};
  	// }
	
	componentDidMount() {
		this._hideFlippedSide();
	}

	componentWillReceiveProps(newProps) {
		let that = this;

		// Make sure both sides are displayed for animation
		this._showBothSides();

		// Wait for display above to take effect
		setTimeout(function () {
	  		that.setState({
	    		isFlipped: newProps.flipped
	  		});
		}, 0);
	}
	
	componentWillUpdate(nextProps, nextState) {
		// If card is flipping to back via props, track element for focus
		if (!this.props.flipped && nextProps.flipped) {
			// The element that focus will return to when flipped back to front
			this.focusElement = document.activeElement;
			// Indicates that the back of card needs focus
			this.focusBack = true;
		}

		// If isFlipped has changed need to notify
		if (this.state.isFlipped !== nextState.isFlipped) {
			this.notifyFlip = true;
		}
	}

	componentDidUpdate() {
		// If card has flipped to front, and focus is still within the card
		// return focus to the element that triggered flipping to the back.
		if (!this.props.flipped && this.focusElement && (0, _helpersContains2['default'])((0, _reactDom.findDOMNode)(this), document.activeElement)) {
			this.focusElement.focus();
			this.focusElement = null;
		}
		
		// Direct focus to the back if needed
		/* eslint brace-style:0 */
		else if (this.focusBack) {
		    this.refs.back.focus();
		    this.focusBack = false;
		}

		// Notify card being flipped
		if (this.notifyFlip && typeof this.props.onFlip === 'function') {
			this.props.onFlip(this.state.isFlipped);
			this.notifyFlip = false;
		}

		// Hide whichever side of the card is down
		setTimeout(this._hideFlippedSide, 600);
	}

	handleFocus() {
		if (this.props.disabled) return;

		this.setState({
			isFlipped: true
		});
	}

	handleBlur() {
		if (this.props.disabled) return;

		this.setState({
			isFlipped: false
		});
	}

	handleKeyDown(e) {
		if (typeof this.props.onKeyDown === 'function') {
			this.props.onKeyDown(e);
		}
	}

	render() {
		return _react2['default'].createElement(
			'div',
			{
				className: (0, _classnames2['default'])({
				  'ReactFlipCard': true,
				  'ReactFlipCard--vertical': this.props.type === 'vertical',
				  'ReactFlipCard--horizontal': this.props.type !== 'vertical',
				  'ReactFlipCard--flipped': this.state.isFlipped,
				  'ReactFlipCard--enabled': !this.props.disabled
				}),
				tabIndex: 0,
				onFocus: this.handleFocus,
				onBlur: this.handleBlur,
				onKeyDown: this.handleKeyDown
				},
				_react2['default'].createElement(
				'div',
				{
				  className: 'ReactFlipCard__Flipper'
				},
				_react2['default'].createElement(
				  'div',
				  {
				    className: 'ReactFlipCard__Front',
				    ref: 'front',
				    tabIndex: -1,
				    'aria-hidden': this.state.isFlipped
				  },
				  this.props.children[0]
				),
				_react2['default'].createElement(
				  'div',
				  {
				    className: 'ReactFlipCard__Back',
				    ref: 'back',
				    tabIndex: -1,
				    'aria-hidden': !this.state.isFlipped
				  },
				  	this.props.children[1]
				)
			)
		);
	},

	_showBothSides: function _showBothSides() {
	this.refs.front.style.display = '';
	this.refs.back.style.display = '';
	},

	_hideFlippedSide: function _hideFlippedSide() {
		// This prevents the flipped side from being tabbable
		if (this.props.disabled) {
			if (this.state.isFlipped) {
		    	this.refs.front.style.display = 'none';
			} else {
		    	this.refs.back.style.display = 'none';
			}
		}
	}
};

export default FlipCard;