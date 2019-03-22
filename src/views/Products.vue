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
            </div><br>
            <div class="card">
                <h3 class="card-header">Product list <span><button v-on:click="addNew" class="btn btn-sm btn-primary float-right">Add Product</button></span></h3>
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Modify</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(product, key) in products">
                                <td>{{ product.data().name }}</td>
                                <td>{{ product.data().price }}</td>
                                <td>
                                    <button v-on:click="editProduct(product)" class="btn btn-sm btn-primary">Edit</button>
                                    <button v-on:click="deleteProduct(product.id)" class="btn btn-sm btn-danger">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        
        <div class="modal fade" id="product" tabindex="-1" role="dialog" aria-labelledby="editLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editLabel">Edit Product</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">

                <div class="row">
                  <!-- main product -->
                  <div class="col-md-8">
                    <div class="form-group">
                      <input type="text" placeholder="Product Name" class="form-control">
                    </div>

                    <div class="form-group">
                      <textarea rows="10" class="form-control" placeholder="Product Description"></textarea>
                    </div>
                  </div>
                  <!-- product sidebar -->
                  <div class="col-md-4">
                    <h4 class="display-6">Product Details</h4>
                    <hr>

                    <div class="form-group">
                      <input type="text" placeholder="Product price" class="form-control">
                    </div>

                    <div class="form-group">
                      <input type="text" placeholder="Product tags" class="form-control">
                      
                      <!-- <div  class="d-flex">
                        <p v-for="tag in product.tags">
                            <span class="p-1">{{tag}}</span>
                        </p>

                      </div> -->
                    </div>


                    <div class="form-group">
                      <label for="product_image">Product Images</label>
                      <input type="file" class="form-control">
                    </div>

                    <!-- <div class="form-group d-flex">
                      <div class="p-1" v-for="image in product.images">
                          <img :src="image" alt="" width="80px">
                      </div>
                    </div> -->
                  </div>
                </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button v-on:click="addProduct()" type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div>


        <br><br>

    </div>
</template>

<script>
import {fb, db} from '../firebase'

export default {
    name: 'Products',
    data() {
        return {
            product: {
                name: null,
                price: null
            },
            products: [],
            activeItem : null
        }
    },
    methods: {
        readData() {
            db.collection("products").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    this.products.push(doc)
                });
            });
        },
        addProduct() {
            db.collection("products").add(this.product)
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
                this.product.name = ''
                this.product.price = ''
                this.watcher()
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
        },
        reset() {
            // Object.assign(this.$data, this.$options.data.apply(this))
        },
        deleteProduct(doc) {
            if (confirm('Are you sure ?')) {
                db.collection("products").doc(doc).delete()
                .then(() => {
                    console.log('Document deleted.')
                    this.watcher()
                }).catch((err) => {
                    console.log(err)
                })
            }else {

            }
        },
        editProduct(product) {
            $("#edit").modal('show')
            this.product = product.data()
            this.activeItem = product.id
        },
        updateProduct() {
            db.collection("products").doc(this.activeItem).update(this.product)
            .then(() => {
                $("#edit").modal('hide')
                this.watcher()
                console.log('Data upated successfully')
            })
            .catch((err) => {
                console.log(err)
            })
        },
        watcher() {
            db.collection("products").onSnapshot((querySnapshot) => {
                this.products = [];
                querySnapshot.forEach((doc) => {
                    this.products.push(doc);
                });
            });
        },
        addNew() {
            $('#product').modal('show')
        }    
    },
    created() {
        this.readData()
    }
}
</script>

<style lang="scss" scoped>
    .card {
        width: 100%;
    }
</style>

