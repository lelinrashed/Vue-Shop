<template>
    <div class="products">
        <div class="container h-100">
            <div class="intro h-100">
                <div class="row h-100 justify-content-center align-items-center">
                    <div class="col-md-6">
                        <h3>Product page</h3>
                        <p>Lorem ipsum dolor, sit amet consecteture adipisicing elit. Unde, ducimus.</p>
                    </div>
                    <div class="col-md-6">
                        <img src="/img/svg/products.svg" alt="" class="img-fluid">
                    </div>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="card">
                    <h3 class="card-header">Add product</h3>
                    <div class="card-body">
                        <div class="product-test">
                            <div class="form-group">
                                <input type="text" v-model="name" placeholder="Product Name" class="form-control">
                            </div>
                            <div class="form-group">
                                <input type="text" v-model="price" placeholder="Price" class="form-control">
                            </div>
                            <div class="form-group">
                                <button v-on:click="saveData" class="btn btn-primary">Save Data</button>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    </div>
</template>

<script>
import {fb, db} from '../firebase'

export default {
    name: 'Products',
    data() {
        return {
            name: null,
            price: null
        }
    },
    methods: {
        saveData() {
            db.collection("products").add({
                name: this.name,
                price: this.price
            })
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
                this.reset()
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
        },
        reset() {
            Object.assign(this.$data, this.$options.data.apply(this))
        }
    }
}
</script>

<style lang="scss" scoped>
    .card {
        width: 100%;
    }
</style>


