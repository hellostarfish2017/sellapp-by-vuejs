<template>
    <div class="cartcontrol">
        <transition name="move">
        <div class="cart-decrease" v-show="food.count>0" @click="decreaseCart">
            <span class="inner icon-remove_circle_outline"></span>
        </div>
        </transition>
        <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
        <div class="cart-add icon-add_circle" @click="addCart"></div>

    </div>
</template>

<script type="text/ecmascript-6">
	import Vue from 'vue';

	export default{
		props: {
			food: {
				type: Object
			}
		},
		created(){

		},
		methods: {
			addCart(event){
				if (!event._constructed) {
					return;
				}
				if (!this.food.count) {
					Vue.set(this.food, 'count', 1);
				} else {
					this.food.count++;
				}

				let tar = event.target;
				this.$root.eventHub.$emit('cart-add', tar);
			},
			decreaseCart(event){
				if (!event._constructed) {
					return;
				}
				if (this.food.count) {
					this.food.count--;
				}
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .move-enter,.move-leave-to
        opacity:0
        transform: translateX(20px) rotate(180deg)

    .cartcontrol
        font-size: 0
        .cart-decrease
            display: inline-block
            padding: 6px
            transition:all .5s linear
            .inner
                display: inline-block
                font-size: 24px
                line-height: 24px
                color: rgb(0, 160, 220)
/*                &.move-inner-enter,&.move-inner-leave-to
                    transform: rotate(180deg)*/

        .cart-count
            display: inline-block
            vertical-align: top
            line-height 24px
            text-align: center
            width: 12px
            padding-top: 6px
            font-size: 10px
            color: black
        .cart-add
            display: inline-block
            padding: 6px
            font-size: 24px
            line-height: 24px
            color: rgb(0, 160, 220)
</style>