import jQuery from 'jquery';

(function( $ ){
    $.fn.circlize = function(options) {
        const defaults = {
            radius: 100,
            percentage: 50,
            usePercentage: true,
            useAnimations: true,
            useGradient: true,
            background: "rgba(20,20,20,0.5)",
            foreground: "#1a1a1a",
            stroke: 20,
            duration: 1000,
            min: 100,
            max: 200,
            gradientColors: ["#f0f0f0", "red", "#f0f0f0"]
        };
        const opts = $.extend(true, {}, defaults, options);
        return this.each(function() {
            let perc, box, x, y, html, context, cnv, ctn, fore, gradient;
            box = (Math.PI*(opts.radius));
            x = box/2;
            y = box/2;
            perc = opts.usePercentage ? opts.percentage : opts.min;
            html = "<canvas class=\"circle\" width="+box+" height="+box+"></canvas>" +
                "<canvas class=\"circle\" width="+box+" height="+box+"></canvas>" +
                "<div class=\"percentage\">"+ perc +"</div>";
            $(this).append(html);
            $(this).addClass("canvasized");
            cnv = $(this).children(".circle");
            context = $(cnv)[0].getContext("2d");
            context.translate(0, box);
            context.rotate(-Math.PI / 2);
            gradient = context.createLinearGradient(0,0,opts.radius*Math.PI,0);
            gradient.addColorStop(0, opts.gradientColors[0]);
            gradient.addColorStop(0.5, opts.gradientColors[1]);
            gradient.addColorStop(1, opts.gradientColors[2]);
            fore = opts.useGradient ? gradient : opts.foreground;
            if(opts.useAnimations){
                jQuery({ counter: 0 }).animate({ counter: $(".percentage").text()}, {
                    duration: opts.duration,
                    easing: "swing",
                    step: function() {
                        if(opts.usePercentage){
                            $(".percentage").text(Math.ceil(this.counter) + "%");
                            context.beginPath();
                            context.arc(x, y, opts.radius, (2-(Math.ceil(this.counter)/100)*2)*Math.PI, 2*Math.PI);
                            context.fillStyle = "transparent";
                            context.fill();
                            context.strokeStyle = fore;
                            context.lineWidth = opts.stroke;
                            context.stroke();
                        }else{
                            $(".percentage").text(Math.ceil(this.counter * 10)/10 + "/" + Math.ceil(opts.max * 10)/10);
                            context.beginPath();
                            context.arc(x, y, opts.radius, (2-(Math.ceil(this.counter)/opts.max)*2)*Math.PI, 2*Math.PI);
                            context.fillStyle = "transparent";
                            context.fill();
                            context.strokeStyle = fore;
                            context.lineWidth = opts.stroke;
                            context.stroke();
                        }
                    }
                });
            }else{
                if(opts.usePercentage){
                    $(".percentage").text(opts.percentage + "%");
                    context.beginPath();
                    context.arc(x, y, opts.radius, (2-(Math.ceil(opts.percentage)/100)*2)*Math.PI, 2*Math.PI);
                    context.fillStyle = "transparent";
                    context.fill();
                    context.strokeStyle = fore;
                    context.lineWidth = opts.stroke;
                    context.stroke();
                }else{
                    $(".percentage").text(Math.ceil(opts.min * 10)/10 + "/" + Math.ceil(opts.max * 10)/10);
                    context.beginPath();
                    context.arc(x, y, opts.radius, (2-(Math.ceil(opts.min)/opts.max)*2)*Math.PI, 2*Math.PI);
                    context.fillStyle = "transparent";
                    context.fill();
                    context.strokeStyle = fore;
                    context.lineWidth = opts.stroke;
                    context.stroke();
                }
            }
            ctn = $(cnv)[1].getContext("2d");
            ctn.beginPath();
            ctn.arc(x, y, opts.radius, 0*Math.PI, 2*Math.PI);
            ctn.fillStyle = "transparent";
            ctn.fill();
            ctn.strokeStyle = opts.background;
            ctn.lineWidth = opts.stroke;
            ctn.stroke();
        });
    };
})( jQuery );
