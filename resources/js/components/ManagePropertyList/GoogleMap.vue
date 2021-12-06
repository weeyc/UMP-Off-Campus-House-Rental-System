<template>
  <div>
    <div class="hidden">
      <h2>Vue Js Search and Add Marker</h2>

      <label>
        <gmap-autocomplete @place_changed="initMarker"></gmap-autocomplete>

        <button @click="addLocationMarker">Add</button>
      </label>
      <br/>

    </div>
    <br>

            <gmap-map
                :zoom="16"
                :center="center"
                style="width:100%;  height: 200px;"
            >
            <gmap-marker
                :position="center"
                :draggable="drag"
                @drag="updateCoordinates"

            ></gmap-marker>
            </gmap-map>
    <!-- :key="index"
        v-for="(m, index) in locationMarkers"
        :position="m.position"
        @click="center=m.position" -->
  </div>
</template>

<script>
export default {
  name: "AddGoogleMap",
      props: {
            latitude: Number,
            logitude: Number,
            registered: Boolean,
        },
  data() {
    return {
        center: {
            lat: 39.7837304,
            lng: -100.4458825
        },
        locationMarkers: [],
        locPlaces: [],
        existingPlace: null,
        lat: null,
        lng: null,
        drag: true,

    };
  },
    mounted:  function(){
        if(this.registered){
            this.getRegisteredPosition();
            this.drag = false;
        }else{
            this.locateGeoLocation();
            this.drag = true;
            this.activate();
          }




      },

  methods: {
      updateCoordinates(location) {
            this.lat =  location.latLng.lat(),
            this.lng = location.latLng.lng(),
            this.$emit('getCoordinate', this.lat, this.lng)

        },
        getRegisteredPosition(){
            if(this.latitude != null){
                this.center = {
                    lat: this.latitude,
                    lng: this.logitude
                   }
            }
        },
        activate() {
            setTimeout(() => this.$emit('getCoordinate', this.lat, this.lng), 10000);
        },

    initMarker(loc) {
      this.existingPlace = loc;
    },
    addLocationMarker() {
      if (this.existingPlace) {
        const marker = {
          lat: this.existingPlace.geometry.location.lat(),
          lng: this.existingPlace.geometry.location.lng()
        };
        this.locationMarkers.push({ position: marker });
        this.locPlaces.push(this.existingPlace);
        this.center = marker;
        this.existingPlace = null;
      }
    },
    locateGeoLocation: function() {
      navigator.geolocation.getCurrentPosition(res => {
        this.center = {
          lat: res.coords.latitude,
          lng: res.coords.longitude
        };

          this.lat= res.coords.latitude,
          this.lng= res.coords.longitude

      });


    }
  }
};
</script>

<style scoped>
.centerMarker{
  position:absolute;
  /*url of the marker*/
  background:url(http://maps.gstatic.com/mapfiles/markers2/marker.png) no-repeat;
  /*center the marker*/
  top:50%;left:50%;

  z-index:1;
  /*fix offset when needed*/
  margin-left:-10px;
  margin-top:-34px;
  /*size of the image*/
  height:34px;
  width:20px;

  cursor:pointer;
}
</style>
