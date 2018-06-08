import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { v } from '@dojo/widget-core/d';
// we will apply a theme mixin to the Worker widget.
// A mixin is not intended to be used on its own, but instead works with a class to add useful functionality.
import { theme, ThemedMixin } from '@dojo/widget-core/mixins/Themed';
import * as css from '../widgets/styles/dashboard.m.css';

const DashboardBase = ThemedMixin(WidgetBase); 

var _name : number = 0;

@theme(css)
export default class Dashboard extends ThemedMixin(DashboardBase){

	private _onClick() {
		console.log('clicked');
		_name = _name +  1;
		// to redraw the page
		this.invalidate();
	}
	protected render() {
		// register the click by calling 
		return v('div', {} ,[ 
			v('h1',{ 
				classes: this.theme(css.h1) , onclick: this._onClick 
			} ,['Clicked ' , _name.toString()])
	]);
	}
}