import {trigger, query, transition, animate, style, keyframes, stagger, group, state} from '@angular/animations';

export let fade;
fade = trigger('fade', [
    transition('void => *', [
        style({backgroundColor: 'green', opacity: 0}),
        animate(2000)
    ]),
    transition('* => void', [// tna7i item m dom => m default -> void
        animate(1000, style({opacity: 0}))])
]);
export let slide;
slide = trigger('slide', [
    transition(':enter', [
        style({transform: 'translateX(-10px)'}),
        animate(500)
    ]),
    transition(':leave', [// tna7i item m dom => m default -> void
        animate('0.5s ease-out', keyframes([
            style({
                offset: .5,
                opacity: 1,
                backgroundColor: 'beige',
                transform: 'translateX(20px)'
            }),
            style({
                offset: 1,
                opacity: 0,
                transform: 'translateX(-100px)'
            })
        ]) )])
]);
export let todo;
todo = trigger('todo', [
    transition(':enter', [
        group([
       query( 'h1' , [ style({transform: 'translateY(-20px)'}),
        animate(1000)
    ]),
        query('.list-group-item', stagger(1000, [
            style({backgroundColor: 'beige', opacity: 0}),
            animate(2000)
        ]))
    ])
 ]) ]);
 export let collapsed;
 collapsed = trigger('collapsed', [
    state('collapsed', style({
        height: 0,
        opacity: 0,
        paddingTop: 0,
        paddingBottom: 0,
    })),
    transition('collapsed => expanded', [
        animate('300ms ease-out', style({
            height: 2,
            paddingTop: 20,
            paddingBottom: 20,
   }))])]);
