import Component from '@ember/component';
// import particlesJSnpm from 'npm:particles.js';
export default Component.extend({
    willRender() {
        this._super(...arguments)
        /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
        // particlesJS.load('particles-js', '/particles/particles.json', function () {
        //     console.log('callback - particles.js config loaded');
        // });
    }
});
