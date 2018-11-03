<template lang="pug">
    v-breadcrumbs(divider="/")
        v-breadcrumbs-item( 
            exact
            v-for="item in routes"
            :key="item.text"
            :disabled="item.disabled"
            :to="item.path"
        ) {{ item.text | caps }}
</template>

<script>
export default {
    name: 'Breadcrumb',
    filters:{
        caps(text){
            if(text == "") return text
            return text[0].toUpperCase() + text.slice(1,text.length);
        }
    },
    computed:{
        routes(){
            let __path__ = this.$route.path;
            let slices = __path__.split('/');
            slices = slices.slice(1, slices.length);
            var routes = [];
            for (var i = 0; i < slices.length; i++) {
                routes.push({
                    text: slices[i],
                    disabled: i == (slices.length - 1) ? true : false,
                    path: this.build_path(slices.slice(0, i + 1))
                })
            }
            return routes;
        }
    },
    methods:{
        build_path(array_of_routes){
            var path = "";
            for (let index = 0; index < array_of_routes.length; index++)
                path = path + "/" + array_of_routes[index];
            return path;
        }
    }
}
</script>
