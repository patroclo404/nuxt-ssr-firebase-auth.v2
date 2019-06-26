<template>
  <section>
    <div>
      Protected page --- only authenticated users can see this
    </div>
    <div v-if="user">
      <div>
        User ID: {{ uid }}
      </div>
      <h3>Current User: {{user.name}}</h3>
      <img v-if="user.avatar" :src="user.avatar" alt="">
      <div>
        All DB Users: {{ allusers }}
      </div>
    </div>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { firebase, usersCollection } from '~/plugins/firebase'

  export default {
    layout: 'protected',
    data () {
      return {
        allusers: []
      }
    },
    computed: {
      ...mapGetters('modules/user', [
        'uid',
        'user'
      ])
    },
    mounted: function () {
      this.$nextTick(() => {
        this.readAllUsersFromDB()
      })
    },
    methods: {
      readAllUsersFromDB() {
        usersCollection
          .get()
          .then(docs => {
            docs.forEach((doc) => {
              this.allusers.push(doc.data())
            })
          })
          .catch(e => {
            console.log(error.message)
          })
      }
    }
  }
</script>
