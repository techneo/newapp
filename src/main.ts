import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { ProjectorMixin } from '@dojo/widget-core/mixins/Projector';
import Dashboard from './widgets/dashboard';
import * as css from './widgets/styles/newapp.m.css';
import { v , w } from '@dojo/widget-core/d';

// Create a projector to convert the virtual DOM produced by the application into the rendered page.
// For more information on starting up a Dojo 2 application, take a look at
// https://dojo.io/tutorials/002_creating_an_application/

class NewApp extends WidgetBase {
	protected render() {
		return v('div', { classes: css.root }, [
			// v('img', { src: logo, classes: css.logo }),
			// v('div', { classes: css.label }, ['Hello , New app!']),
			w(Dashboard , {
			}) 
		]);
	}
}

const element = document.getElementById('widget') as Element;
const Projector = ProjectorMixin(NewApp);
const projector = new Projector();

// By default, append() will attach the rendered content to document.body.  To insert this application
// into existing HTML content, pass the desired root node to append().
projector.append(element);
