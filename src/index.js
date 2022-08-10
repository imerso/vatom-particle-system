/**
 * This is the main entry point for your plugin.
 *
 * All information regarding plugin development can be found at
 * https://developer.vatom.com/plugins/plugins/
 *
 * @license MIT
 * @author Vatom Inc.
 */
export default class MyPlugin extends BasePlugin {

    /** Plugin info */
    static id = "particlesystem"
    static name = "Particle System"

    /** Called on load */
    onLoad() {

        this.menus.register({
            id: 'fire1',
            title: 'Particle System',
            icon: this.paths.absolute('./icon.svg'),
            text: 'Particle System - Fire1',
            order: 0,
            section: 'insert-object',
            adminOnly: false,
            inAccordion: false,
            currentUser: false,
            otherUsers: false,
            action: () => this.onPSFire1Press()
        })

        this.menus.register({
            id: 'fire2',
            title: 'Particle System',
            icon: this.paths.absolute('./icon.svg'),
            text: 'Particle System - Fire2',
            order: 0,
            section: 'insert-object',
            adminOnly: false,
            inAccordion: false,
            currentUser: false,
            otherUsers: false,
            action: () => this.onPSFire2Press()
        })

        this.menus.register({
            id: 'fire3',
            title: 'Particle System',
            icon: this.paths.absolute('./icon.svg'),
            text: 'Particle System - Fire3',
            order: 0,
            section: 'insert-object',
            adminOnly: false,
            inAccordion: false,
            currentUser: false,
            otherUsers: false,
            action: () => this.onPSFire3Press()
        })

        this.menus.register({
            id: 'fire4',
            title: 'Particle System',
            icon: this.paths.absolute('./icon.svg'),
            text: 'Particle System - Fire4',
            order: 0,
            section: 'insert-object',
            adminOnly: false,
            inAccordion: false,
            currentUser: false,
            otherUsers: false,
            action: () => this.onPSFire4Press()
        })

        this.menus.register({
            id: 'fountain1',
            title: 'Particle System',
            icon: this.paths.absolute('./icon.svg'),
            text: 'Particle System - Fountain 1',
            order: 0,
            section: 'insert-object',
            adminOnly: false,
            inAccordion: false,
            currentUser: false,
            otherUsers: false,
            action: () => this.onPSFountain1Press()
        })

        this.menus.register({
            id: 'helper1',
            title: 'Particle System',
            icon: this.paths.absolute('./icon.svg'),
            text: 'Helper - Fire',
            order: 0,
            section: 'insert-object',
            adminOnly: false,
            inAccordion: false,
            currentUser: false,
            otherUsers: false,
            action: () => this.onPSHlp1Press()
        })

        this.menus.register({
            id: 'helper2',
            title: 'Particle System',
            icon: this.paths.absolute('./icon.svg'),
            text: 'Helper - Smoke',
            order: 0,
            section: 'insert-object',
            adminOnly: false,
            inAccordion: false,
            currentUser: false,
            otherUsers: false,
            action: () => this.onPSHlp2Press()
        })

        this.menus.register({
            id: 'helper3',
            title: 'Particle System',
            icon: this.paths.absolute('./icon.svg'),
            text: 'Helper - Rain',
            order: 0,
            section: 'insert-object',
            adminOnly: false,
            inAccordion: false,
            currentUser: false,
            otherUsers: false,
            action: () => this.onPSHlp3Press()
        })
    }


    // Fire 1
    onPSFire1Press() {
        let _this = this;
        this.user.getPosition().then((pos) =>
        {
            this.objects.create({
                name: 'ps_fire1',
                type:'particles',
                scale:1,
                x:pos.x,
                height:pos.y,
                y:pos.z,
                particle_emitter_type: 'Hemisphere',
                particle_capacity: 5000,
                particle_texture: "https://firebasestorage.googleapis.com/v0/b/ydangle-high-fidelity-test-2.appspot.com/o/server%2FVaHQdiYp4E%2FUploads%2Ffire.png?alt=media&token=2cebf033-0f54-4a5d-af15-1beaf0394117",
                particle_min_size: 0.5,
                particle_max_size: 3.0,
                particle_gravity_x: 0,
                particle_gravity_y: 0.2,
                particle_gravity_z: 0,
                particle_emit_rate: 500,
                particle_min_life_time: 5,
                particle_max_life_time: 15,
                particle_min_emit_power: 0.1,
                particle_max_emit_power: 1,
                particle_color1: '#ffffff',
                particle_color2: '#f0f0f0',
                particle_direction1_x: 0,
                particle_direction1_y: 0.5,
                particle_direction1_z: 0,
                particle_direction2_x: 0,
                particle_direction2_y: 0.75,
                particle_direction2_z: 0,
                particle_min_box_x: -1,
                particle_min_box_y: -1,
                particle_min_box_z: -1,
                particle_max_box_x: 1,
                particle_max_box_y: 1,
                particle_max_box_z: 1,
                particle_radius: 0.25,
                particle_radius_range: 0.75,
                particle_min_angular_speed: 0,
                particle_max_angular_speed: 1,
                // supported blend modes: BLENDMODE_STANDARD, BLENDMODE_ADD, BLENDMODE_MULTIPLY, BLENDMODE_ONEONE
                particle_blend_mode: 'BLENDMODE_ADD',
                temporary:false, collide:false, clientOnly:false }).then((obj) =>
            {
            });
        });
    }


    // Fire 2
    onPSFire2Press() {
        let _this = this;
        this.user.getPosition().then((pos) =>
        {
            this.objects.create({
                name: 'ps_fire2',
                type:'particles',
                scale:1,
                x:pos.x,
                height:pos.y,
                y:pos.z,
                particle_emitter_type: 'Hemisphere',
                particle_capacity: 10000,
                particle_texture: "https://firebasestorage.googleapis.com/v0/b/ydangle-high-fidelity-test-2.appspot.com/o/server%2FVaHQdiYp4E%2FUploads%2Ffire.png?alt=media&token=2cebf033-0f54-4a5d-af15-1beaf0394117",
                particle_min_size: 1.0,
                particle_max_size: 2.0,
                particle_gravity_x: 0,
                particle_gravity_y: 0.5,
                particle_gravity_z: 0,
                particle_emit_rate: 150,
                particle_min_life_time: 3,
                particle_max_life_time: 10,
                particle_min_emit_power: 0.1,
                particle_max_emit_power: 0.5,
                particle_color1: '#ffffff',
                particle_color2: '#f0f0f0',
                particle_direction1_x: 0,
                particle_direction1_y: 0.5,
                particle_direction1_z: 0,
                particle_direction2_x: 0,
                particle_direction2_y: 0.75,
                particle_direction2_z: 0,
                particle_min_box_x: -1,
                particle_min_box_y: -1,
                particle_min_box_z: -1,
                particle_max_box_x: 1,
                particle_max_box_y: 1,
                particle_max_box_z: 1,
                particle_radius: 0.25,
                particle_radius_range: 0.75,
                particle_min_angular_speed: 0.25,
                particle_max_angular_speed: 0.75,
                // supported blend modes: BLENDMODE_STANDARD, BLENDMODE_ADD, BLENDMODE_MULTIPLY, BLENDMODE_ONEONE
                particle_blend_mode: 'BLENDMODE_MULTIPLY',
                temporary:false, collide:false, clientOnly:false }).then((obj) =>
            {
            });
        });
    }


    // Fire 3
    onPSFire3Press() {
        let _this = this;
        this.user.getPosition().then((pos) =>
        {
            this.objects.create({
                name: 'ps_fire3',
                type:'particles',
                scale:1,
                x:pos.x,
                height:pos.y,
                y:pos.z,
                particle_emitter_type: 'Box',
                particle_capacity: 2000,
                particle_texture: "https://firebasestorage.googleapis.com/v0/b/ydangle-high-fidelity-test-2.appspot.com/o/server%2FVaHQdiYp4E%2FUploads%2Fflare.png?alt=media&token=324d2678-995d-4629-bae0-ce11928798bf",
                particle_min_size: 0.1,
                particle_max_size: 0.5,
                particle_gravity_x: 0,
                particle_gravity_y: 0,
                particle_gravity_z: 0,
                particle_emit_rate: 100,
                particle_min_life_time: 5,
                particle_max_life_time: 15,
                particle_min_emit_power: 0.1,
                particle_max_emit_power: 1,
                particle_color1: '#ffffff',
                particle_color2: '#f0f0f0',
                particle_direction1_x: 0,
                particle_direction1_y: 0.5,
                particle_direction1_z: 0,
                particle_direction2_x: 0,
                particle_direction2_y: 0.75,
                particle_direction2_z: 0,
                particle_min_box_x: -1,
                particle_min_box_y: -1,
                particle_min_box_z: -1,
                particle_max_box_x: 1,
                particle_max_box_y: 1,
                particle_max_box_z: 1,
                particle_radius: 0.1,
                particle_radius_range: 0.2,
                particle_min_angular_speed: 0,
                particle_max_angular_speed: 0,
                // supported blend modes: BLENDMODE_STANDARD, BLENDMODE_ADD, BLENDMODE_MULTIPLY, BLENDMODE_ONEONE
                particle_blend_mode: 'BLENDMODE_ADD',
                temporary:false, collide:false, clientOnly:false }).then((obj) =>
            {
            });
        });
    }


    // Fire 4
    onPSFire4Press() {
        let _this = this;
        this.user.getPosition().then((pos) =>
        {
            this.objects.create({
                name: 'ps_fire4',
                type:'particles',
                scale:1,
                x:pos.x,
                height:pos.y,
                y:pos.z,
                particle_emitter_type: 'Hemisphere',
                particle_capacity: 200,
                particle_texture: "https://firebasestorage.googleapis.com/v0/b/ydangle-high-fidelity-test-2.appspot.com/o/server%2FVaHQdiYp4E%2FUploads%2Fflare.png?alt=media&token=324d2678-995d-4629-bae0-ce11928798bf",
                particle_min_size: 0.1,
                particle_max_size: 0.25,
                particle_gravity_x: 0,
                particle_gravity_y: -50,
                particle_gravity_z: 0,
                particle_emit_rate: 200,
                particle_min_life_time: 0.01,
                particle_max_life_time: 0.5,
                particle_min_emit_power: 10,
                particle_max_emit_power: 100,
                particle_color1: '#ff0000',
                particle_color2: '#f0f000',
                particle_direction1_x: 0,
                particle_direction1_y: 0.5,
                particle_direction1_z: 0,
                particle_direction2_x: 0,
                particle_direction2_y: 0.75,
                particle_direction2_z: 0,
                particle_min_box_x: -1,
                particle_min_box_y: -1,
                particle_min_box_z: -1,
                particle_max_box_x: 1,
                particle_max_box_y: 1,
                particle_max_box_z: 1,
                particle_radius: 0.1,
                particle_radius_range: 0.2,
                particle_min_angular_speed: 0,
                particle_max_angular_speed: 0,
                // supported blend modes: BLENDMODE_STANDARD, BLENDMODE_ADD, BLENDMODE_MULTIPLY, BLENDMODE_ONEONE
                particle_blend_mode: 'BLENDMODE_ADD',
                temporary:false, collide:false, clientOnly:false }).then((obj) =>
            {
            });
        });
    }


    // Fountain 1
    onPSFountain1Press() {
        let _this = this;
        this.user.getPosition().then((pos) =>
        {
            this.objects.create({
                name: 'ps_fountain1',
                type:'particles',
                scale:1,
                x:pos.x,
                height:pos.y + 2,
                y:pos.z,
                particle_emitter_type: 'Hemisphere',
                particle_capacity: 10000,
                particle_texture: "https://firebasestorage.googleapis.com/v0/b/ydangle-high-fidelity-test-2.appspot.com/o/server%2FVaHQdiYp4E%2FUploads%2Fflare.png?alt=media&token=324d2678-995d-4629-bae0-ce11928798bf",
                particle_min_size: 0.5,
                particle_max_size: 2.0,
                particle_gravity_x: 0,
                particle_gravity_y: -64,
                particle_gravity_z: 0,
                particle_emit_rate: 2000,
                particle_min_life_time: 0.5,
                particle_max_life_time: 1.0,
                particle_min_emit_power: 16,
                particle_max_emit_power: 32,
                particle_color1: '#ffa0ff',
                particle_color2: '#a0a0ff',
                particle_direction1_x: 0,
                particle_direction1_y: 0.5,
                particle_direction1_z: 0,
                particle_direction2_x: 0,
                particle_direction2_y: 0.75,
                particle_direction2_z: 0,
                particle_min_box_x: -1,
                particle_min_box_y: -1,
                particle_min_box_z: -1,
                particle_max_box_x: 1,
                particle_max_box_y: 1,
                particle_max_box_z: 1,
                particle_radius: 0.1,
                particle_radius_range: 0.2,
                particle_min_angular_speed: 0,
                particle_max_angular_speed: 0,
                // supported blend modes: BLENDMODE_STANDARD, BLENDMODE_ADD, BLENDMODE_MULTIPLY, BLENDMODE_ONEONE
                particle_blend_mode: 'BLENDMODE_ADD',
                temporary:false, collide:false, clientOnly:false }).then((obj) =>
            {
            });
        });
     }


    // Helper 'fire'
    onPSHlp1Press() {
        let _this = this;
        this.user.getPosition().then((pos) =>
        {
            this.objects.create({
                name: 'helper - fire',
                type:'particles',
                particle_emitter_type: 'Helper',
                particle_helper: 'fire',
                scale:1,
                x:pos.x,
                height:pos.y,
                y:pos.z,
                particle_capacity: 1000,
                particle_texture: "https://firebasestorage.googleapis.com/v0/b/ydangle-high-fidelity-test-2.appspot.com/o/server%2FVaHQdiYp4E%2FUploads%2Fflare.png?alt=media&token=324d2678-995d-4629-bae0-ce11928798bf",
                particle_min_size: 0.1,
                particle_max_size: 0.25,
                particle_gravity_x: 0,
                particle_gravity_y: -1,
                particle_gravity_z: 0,
                particle_emit_rate: 200,
                particle_min_life_time: 0.01,
                particle_max_life_time: 0.5,
                particle_min_emit_power: 10,
                particle_max_emit_power: 100,
                particle_color1: '#ff0000',
                particle_color2: '#f0f000',
                particle_direction1_x: 0,
                particle_direction1_y: 0.5,
                particle_direction1_z: 0,
                particle_direction2_x: 0,
                particle_direction2_y: 1,
                particle_direction2_z: 0,
                particle_min_box_x: -1,
                particle_min_box_y: -1,
                particle_min_box_z: -1,
                particle_max_box_x: 1,
                particle_max_box_y: 1,
                particle_max_box_z: 1,
                particle_radius: 0.1,
                particle_radius_range: 0.2,
                particle_min_angular_speed: 0,
                particle_max_angular_speed: 0,
                // supported blend modes: BLENDMODE_STANDARD, BLENDMODE_ADD, BLENDMODE_MULTIPLY, BLENDMODE_ONEONE
                particle_blend_mode: 'BLENDMODE_ADD',
                temporary:false, collide:false, clientOnly:false }).then((obj) =>
            {
            });
        });
     }

    // Helper 'smoke'
    onPSHlp2Press() {
        let _this = this;
        this.user.getPosition().then((pos) =>
        {
            this.objects.create({
                name: 'helper - smoke',
                type:'particles',
                particle_emitter_type: 'Helper',
                particle_helper: 'smoke',
                scale:1,
                x:pos.x,
                height:pos.y,
                y:pos.z,
                particle_capacity: 1000,
                particle_texture: "https://firebasestorage.googleapis.com/v0/b/ydangle-high-fidelity-test-2.appspot.com/o/server%2FVaHQdiYp4E%2FUploads%2Fflare.png?alt=media&token=324d2678-995d-4629-bae0-ce11928798bf",
                particle_min_size: 0.1,
                particle_max_size: 0.25,
                particle_gravity_x: 0,
                particle_gravity_y: -1,
                particle_gravity_z: 0,
                particle_emit_rate: 200,
                particle_min_life_time: 0.01,
                particle_max_life_time: 0.5,
                particle_min_emit_power: 10,
                particle_max_emit_power: 100,
                particle_color1: '#ff0000',
                particle_color2: '#f0f000',
                particle_direction1_x: 0,
                particle_direction1_y: 0.5,
                particle_direction1_z: 0,
                particle_direction2_x: 0,
                particle_direction2_y: 1,
                particle_direction2_z: 0,
                particle_min_box_x: -1,
                particle_min_box_y: -1,
                particle_min_box_z: -1,
                particle_max_box_x: 1,
                particle_max_box_y: 1,
                particle_max_box_z: 1,
                particle_radius: 0.1,
                particle_radius_range: 0.2,
                particle_min_angular_speed: 0,
                particle_max_angular_speed: 0,
                // supported blend modes: BLENDMODE_STANDARD, BLENDMODE_ADD, BLENDMODE_MULTIPLY, BLENDMODE_ONEONE
                particle_blend_mode: 'BLENDMODE_ADD',
                temporary:false, collide:false, clientOnly:false }).then((obj) =>
            {
            });
        });
     }

    // Helper 'rain'
    onPSHlp3Press() {
        let _this = this;
        this.user.getPosition().then((pos) =>
        {
            this.objects.create({
                name: 'helper - rain',
                type:'particles',
                particle_emitter_type: 'Helper',
                particle_helper: 'rain',
                scale:1,
                x:pos.x,
                height:pos.y + 10,
                y:pos.z,
                particle_capacity: 1000,
                particle_texture: "https://firebasestorage.googleapis.com/v0/b/ydangle-high-fidelity-test-2.appspot.com/o/server%2FVaHQdiYp4E%2FUploads%2Fflare.png?alt=media&token=324d2678-995d-4629-bae0-ce11928798bf",
                particle_min_size: 0.1,
                particle_max_size: 0.25,
                particle_gravity_x: 0,
                particle_gravity_y: -1,
                particle_gravity_z: 0,
                particle_emit_rate: 200,
                particle_min_life_time: 0.01,
                particle_max_life_time: 0.5,
                particle_min_emit_power: 10,
                particle_max_emit_power: 100,
                particle_color1: '#ff0000',
                particle_color2: '#f0f000',
                particle_direction1_x: 0,
                particle_direction1_y: 0.5,
                particle_direction1_z: 0,
                particle_direction2_x: 0,
                particle_direction2_y: 1,
                particle_direction2_z: 0,
                particle_min_box_x: -1,
                particle_min_box_y: -1,
                particle_min_box_z: -1,
                particle_max_box_x: 1,
                particle_max_box_y: 1,
                particle_max_box_z: 1,
                particle_radius: 0.1,
                particle_radius_range: 0.2,
                particle_min_angular_speed: 0,
                particle_max_angular_speed: 0,
                // supported blend modes: BLENDMODE_STANDARD, BLENDMODE_ADD, BLENDMODE_MULTIPLY, BLENDMODE_ONEONE
                particle_blend_mode: 'BLENDMODE_ADD',
                temporary:false, collide:false, clientOnly:false }).then((obj) =>
            {
            });
        });
     }

}
