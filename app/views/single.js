define([
	'jquery',
	'underscore',
	'backbone',
	'bootstrap',
	'models/file'
], function( $, _, Backbone ) {
	app.singleView = Backbone.View.extend( {
		tagName : 'div',
		model   : app.fileModel,
		template: _.template( $( '#single-template' ).html() ),

		render: function () {
			console.log( this.model.attributes );
			var that = this;

			this.$el.html(
				this.template( this.model.attributes )
			);

			this.$el.find( '.single-image-actions .single-image-delete' ).click( function () {
				if ( confirm( 'Are you sure you want to delete this image?' ) ) {
					that.model.destroy( {
						success: function ( model, response ) {
							app.router.navigate( '', { trigger: true } );
						}
					} );
				}
				return false;
			} );

			return this;
		}
	} );

	return app.singleView;
});