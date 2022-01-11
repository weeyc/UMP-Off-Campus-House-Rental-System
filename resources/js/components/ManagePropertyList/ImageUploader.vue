<template>
    <div class="uploader"
        @dragenter="OnDragEnter"
        @dragleave="OnDragLeave"
        @dragover.prevent
        @drop="onDrop"
        :class="{ dragging: isDragging }">

        <div class="upload-control" v-show="images.length">
            <label for="file">Select a file</label>
            <!-- <button @click="upload">Upload</button> -->
        </div>


        <div v-show="!images.length">
            <i class="fa fa-cloud-upload"></i>
            <p>Drag your images here</p>
            <div>OR</div>
            <div class="file-input">
                <label for="file">Select a file</label>
                <input type="file" id="file" @change="onInputChange" multiple>
            </div>
        </div>

        <div class="images-preview" v-show="images.length">
            <div class="img-wrapper" v-for="(image, index) in images" :key="index" >
                <!-- <img :src="image" :alt="`Image Uplaoder ${index}`" > -->

                        <article tabindex="0" class="group hasImage w-full h-full rounded-md focus:outline-none focus:shadow-outline bg-gray-100 cursor-pointer relative text-transparent hover:text-white shadow-sm">
                        <img :src="image" :alt="`Image Uplaoder ${index}`" class="img-preview w-full h-full sticky object-cover rounded-md bg-fixed" />
                        <section class="flex flex-col rounded-md text-xs break-words w-full h-full z-20 absolute top-0 py-2 px-3">
                            <h1 class="flex-1"></h1>
                            <div class="flex">
                            <span class="p-1">
                                <i>
                                <svg class="fill-current w-4 h-4 ml-auto pt-" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M5 8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5zm9 .5l-2.519 4-2.481-1.96-4 5.96h14l-5-8zm8-4v14h-20v-14h20zm2-2h-24v18h24v-18z" />
                                </svg>
                                </i>
                            </span>

                            <p class="p-1 size text-xs"></p>
                            <button @click="removeImage(index)" class="delete ml-auto focus:outline-none hover:bg-gray-300 p-1 rounded-md">
                                <svg class="pointer-events-none fill-current w-4 h-4 ml-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path class="pointer-events-none" d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z" />
                                </svg>
                            </button>
                            </div>
                        </section>
                        </article>


                <div class="details" >
                    <span class="name" v-text="files[index].name"></span>
                    <span class="size" v-text="getFileSize(files[index].size)"></span>
                    <!-- <button @click="removeImage(index)">Remove</button> -->
                     <select v-model="imageLabel[index]"  :class="[hide]" class=" w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-1  focus:border-blue-500 focus:outline-none focus:ring" name="campus">
                            <option class="text-Blue-700 text-sm" value="Cover"> Image Cover </option>
                            <option class="text-gray-700 text-sm" value="Living Hall"> Living Hall</option>
                            <option class="text-gray-700 text-sm" value="Toilet"> Toilet </option>
                            <option class="text-gray-700 text-sm" value="Kitchen"> Kitchen </option>
                            <option class="text-gray-700 text-sm" value="Balcony"> Balcony </option>
                        </select>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
     props: {
        editImage: Boolean,
        hideLabel: Boolean,
    },
    data: () => ({
        isDragging: false,
        dragCount: 0,
        reloadKey: -1,
        files: [],
        images: [],
        imageLabel: [],
        hide: '',
    }),
    methods: {
        getRegisteredImage(){
            //this.images = this.photo[0].photo_name
        },
        OnDragEnter(e) {
            e.preventDefault();

            this.dragCount++;
            this.isDragging = true;
            return false;
        },
        OnDragLeave(e) {
            e.preventDefault();
            this.dragCount--;
            if (this.dragCount <= 0)
                this.isDragging = false;
        },
        onInputChange(e) {
            const files = e.target.files;
            Array.from(files).forEach(file => this.addImage(file));
        },
        onDrop(e) {
            e.preventDefault();
            e.stopPropagation();
            this.isDragging = false;
            const files = e.dataTransfer.files;
            Array.from(files).forEach(file => this.addImage(file));
        },
        addImage(file) {
            if (!file.type.match('image.*')) {
                this.$toastr.e(`${file.name} is not an image`);
                return;
            }
            this.files.push(file);
            const img = new Image(),
                reader = new FileReader();
            reader.onload = (e) => this.images.push(e.target.result);
            reader.readAsDataURL(file);
        },
        getFileSize(size) {
            const fSExt = ['Bytes', 'KB', 'MB', 'GB'];
            let i = 0;

            while(size > 900) {
                size /= 1024;
                i++;
            }
            return `${(Math.round(size * 100) / 100)} ${fSExt[i]}`;
        },
        // removeImage (i) {
        //     var arrayImages = this.images;
        //     var arraylabel = this.imageLabel;

        //     var index = arrayImages.indexOf(arrayImages[i]);

        //     arrayImages.splice(index, i);
        //     arraylabel.splice(index, i);

        //     this.events.splice(this.events.indexOf(event), 1);


        // },
         removeImage (index) {
            this.$delete(this.images, index)
            this.$delete(this.imageLabel, index)
            },

    },
     mounted: function(){
         this.$emit('getImage', this.images, this.imageLabel)
         if(this.editImage){
             this.getRegisteredImage();
         }
         if(this.hideLabel){
             this.hide = "hidden"
         }
    },
}
</script>

<style lang="scss" scoped>
.uploader {
    width: 100%;
    background: #2196F3;
    color: #fff;
    padding: 40px 15px;
    text-align: center;
    border-radius: 10px;
    border: 3px dashed #fff;
    font-size: 20px;
    position: relative;
    &.dragging {
        background: #fff;
        color: #2196F3;
        border: 3px dashed #2196F3;
        .file-input label {
            background: #2196F3;
            color: #fff;
        }
    }
    i {
        font-size: 85px;
    }
    .file-input {
        width: 200px;
        margin: auto;
        height: 68px;
        position: relative;
        label,
        input {
            background: #fff;
            color: #2196F3;
            width: 100%;
            position: absolute;
            left: 0;
            top: 0;
            padding: 10px;
            border-radius: 4px;
            margin-top: 7px;
            cursor: pointer;
        }
        input {
            opacity: 0;
            z-index: -2;
        }
    }
    .images-preview {
        display: flex;
        flex-wrap: wrap;
        margin-top: 20px;
        .img-wrapper {
            width: 200x;
            display: flex;
            flex-direction: column;
            margin: 10px;
            height: 150px;
            justify-content: space-between;
            background: #fff;
            box-shadow: 5px 5px 20px #3e3737;
            img {
                max-height: 105px;
            }
        }
        .details {
            font-size: 12px;
            background: #fff;
            color: #000;
            display: flex;
            flex-direction: column;
            align-items: self-start;
            padding: 3px 6px;
            .name {
                overflow: hidden;
                height: 18px;
            }
        }
    }
    .upload-control {
        position: absolute;
        width: 100%;
        background: #fff;
        top: 0;
        left: 0;
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
        padding: 10px;
        padding-bottom: 4px;
        text-align: right;
        button, label {
            background: #2196F3;
            border: 2px solid #03A9F4;
            border-radius: 3px;
            color: #fff;
            font-size: 15px;
            cursor: pointer;
        }
        label {
            padding: 2px 5px;
            margin-right: 10px;
        }
    }
}
</style>
