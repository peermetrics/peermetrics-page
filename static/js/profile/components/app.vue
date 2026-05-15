<template>
  <div>
    <section class="bg-white space-sm pb-4">
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-auto">
            <h1 class="h2">Account Settings</h1>
          </div>
        </div>
        <!--end of row-->
      </div>
      <!--end of container-->
    </section>
    <!--end of section-->

    <section class="flush-with-above space-0">
      <div class="bg-white">
        <div class="container">
          <div class="row">
            <div class="col">
              <b-tabs
                content-class="custom-layout-background bg-light px-2 py-3rem"
                v-model="activeTabIndex"
              >
                <b-tab title="General">
                  <AccountDetails
                    :profileUrl="profileUrl"
                    :privacyLink="privacyLink"
                    :csrf="csrf"
                    :user="user"
                  />
                </b-tab>
                <b-tab title="Billing" :disabled="number_of_organizations === '0'">
                  <Billing
                    :profileUrl="profileUrl"
                    :csrf="csrf"
                    :user="user"
                    :plan="plan"
                    :subscription="subscription"
                    :number_of_organizations="number_of_organizations"
                    :number_of_apps="number_of_apps"
                  />
                </b-tab>
              </b-tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const tabs = ["general", 'billing'];

import EventBus from '../../eventBus'
import AccountDetails from './accountDetailsTab.vue';
import Billing from './billingTab.vue';

export default {
  name: 'Profile',
  components: {
    AccountDetails,
    Billing,
  },
  mounted() {
    window.addEventListener(
      'hashchange',
      () => this.activateTab(),
      false,
    );
     EventBus.$on('changeData', this.onChangeData)
  },

  beforeDestroy() {
    window.removeEventListener(
      'hashchange',
      () => this.activateTab(),
      false,
    );
  },
  created() {
    this.activateTab();

    if (peermetrics.profile) {
      if (peermetrics.profile.user) {
        this.user = JSON.parse(
          JSON.stringify(peermetrics.profile.user),
        );
      }

      if (peermetrics.profile.plan) {
        this.plan = JSON.parse(
          JSON.stringify(peermetrics.profile.plan),
        );
      }

      if (peermetrics.profile.subscription) {
        this.subscription = JSON.parse(
          JSON.stringify(peermetrics.profile.subscription),
        );
        // Processing value because in Python boolean values are True and False
        // Because in JS, Boolean('False') === true, we need to processing this value
        this.subscription = Object.keys(this.subscription).reduce((result, key) => {
          let value = this.subscription[key]

          if(key === 'has_card_attached') {
            let isFalse = value === '' || value.toLowerCase() === 'false'
            value = isFalse ? false : true;
          }

          result[key] = value;

          return result;
        }, {})
      }

      if (peermetrics.profile.number_of_organizations) {
        this.number_of_organizations =
          peermetrics.profile.number_of_organizations;
      }

      if (peermetrics.profile.number_of_apps) {
        this.number_of_apps = peermetrics.profile.number_of_apps;
      }

      if (peermetrics.profile.csrf) {
        this.csrf = peermetrics.profile.csrf;
      }

      if (peermetrics.profile.profileUrl) {
        this.profileUrl = peermetrics.profile.profileUrl;
      }

      if (peermetrics.profile.privacyLink) {
        this.privacyLink = peermetrics.profile.privacyLink;
      }
    }
  },
  data() {
    return {
      activeTabIndex: -1,
      profileUrl: '',
      privacyLink: '',
      csrf: '',
      user: null,
      plan: null,
      subscription: null,
      number_of_organizations: '',
      number_of_apps: '',
    };
  },
  methods: {
    activateTab() {
      const currentTab = location.hash.replace('#', '');
      const foundTabIndex = tabs.findIndex(tab => tab === currentTab)

      if(foundTabIndex === -1 ){
        this.activeTabIndex = 0;
      } else {
        this.activeTabIndex = foundTabIndex;
      }
    },
    onChangeData(payload) {
      const allowChangeField = ['user', 'plan', 'subscription']
      const {field, data} = payload;

      if(allowChangeField.includes(field)) {
        this[field] = {...this[field], ...data}
      }
    }
  },
  watch: {
    activeTabIndex(newIndex, oldIndex) {
      if (oldIndex === -1) return;

      const url = location.href.replace(location.hash, '');
      let tabActive = '';

      if(newIndex < tabs.length) {
        tabActive = tabs[newIndex];
      } else {
        tabActive = tabs[0];
      }

      window.history.replaceState(null, null, `${url}#${tabActive}`);
    },
  },
};
</script>
<style>
.custom-layout-background {
  /**
    Add this class to remove the padding from .col and white background
   */
  margin: 0 -0.75rem;
}
.py-3rem {
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;
}
</style>
