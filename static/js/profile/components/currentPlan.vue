<template>
  <div>
    <div class="row mb-2">
      <div class="col">
        <h2 class="h3">Your plan</h2>
      </div>
      <!--end of col-->
    </div>
    <!--end of row-->
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-8">
                <h3 class="h4 card-title mb-2">
                  {{ plan['plan_name'] }}
                </h3>
                <p class="card-subtitle text-muted mb-2">
                  This plan offers:
                </p>
              </div>
              <div class="col-lg-8">
                <div class="row description text-center">
                  <div class="col">
                    <h5>
                      {{ number_of_organizations }} / {{ plan['max_organizations'] || '∞' }}
                    </h5>
                    <span>organizations</span>
                  </div>
                  <div class="col">
                    <h5>
                      {{ number_of_apps }} / {{ plan['max_apps'] || '∞' }}
                    </h5>
                    <span>apps</span>
                  </div>
                  <div class="col">
                    <h5>
                      1 / {{ plan['max_users'] || '∞' }}
                    </h5>
                    <span>users</span>
                  </div>
                  <div class="col">
                    <h5>
                      {{ plan['data_retention'] }} <span>days</span>
                    </h5>
                    <span>data retention</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="row mt-4">
              <div class="col">
                <h5>
                  Minutes used:
                  <span class="text-muted">
                    {{ userUsage }} /
                    <template v-if="user.max_usage">
                      {{ userMaxUsage }}
                    </template>
                    <template v-else> Unlimited </template>
                  </span>
                </h5>

                <template v-if="user.max_usage">
                  <b-progress :value="(userUsage / userMaxUsage) * 100" max="100"></b-progress>
                </template>
              </div>
            </div>

            <!-- <div class="row mt-4">
              <div class="col">
                <p class="lead">Minutes per day</p>
                <MinutesPerDayChart />
              </div>
            </div> -->

            <div class="row mt-4">
              <div class="col-lg-8">
                <h4 class="h5">Billing limit</h4>
                <!-- if the user hasn't attached a payment method, he is limitted to the free quota  -->
                <template v-if="!subscription.has_card_attached">
                  <p>
                    This plan comes with a monthly free quota of call
                    minutes. If you would like to collect more than
                    that, you can attach a payment method.
                  </p>
                  <div class="card">
                    <div class="card-body">
                      <p class="card-title">
                        {{ planMaxUsage }}
                      </p>
                      <p>
                        You plan has a monthy free quota of <em>{{ planMaxUsage }}</em> minutes.
                      </p>
                    </div>
                  </div>
                </template>
                <template v-else>
                  <p>
                    You can now collect more than the plan's included monthly quota. You will only be charged for minutes that go over that limit.
                  </p>
                  <div class="card">
                    <div class="card-body">
                      <form
                        id="change-limit-form"
                        class="form"
                        @submit.prevent="saveLimit"
                      >
                        <input
                          type="hidden"
                          name="csrfmiddlewaretoken"
                          :value="csrf"
                        />
                        <p class="card-title">Collecting limit</p>
                        <p>
                          You can set up a minute limit when collecting will automatically stop for all apps. This is useful if you would like to remain in a certain budget.
                        </p>
                        <div class="custom-control custom-radio">
                          <input
                            id="unlimited"
                            name="minute-limit"
                            value="unlimited"
                            type="radio"
                            class="custom-control-input"
                            v-model="minuteLimit"
                          />

                          <label
                            class="custom-control-label"
                            for="unlimited"
                            >Unlimited</label
                          >
                        </div>
                        <div class="custom-control custom-radio">
                          <input
                            id="limited"
                            name="minute-limit"
                            value="limited"
                            type="radio"
                            class="custom-control-input"
                            v-model="minuteLimit"
                          />
                          <label
                            class="custom-control-label"
                            for="limited"
                            >Custom</label
                          >

                          <div class="mt-2">
                            <input type="hidden" name="limit" v-model="limit" />
                            <input
                              type="number"
                              v-model="customLimit"
                            />
                             minutes
                          </div>
                        </div>

                        <div class="mt-4">
                          <div class="alert alert-success limit-alert" v-if="limitSaveSuccessfully">
                            Custom limit saved successfully
                          </div>
                          <div class="alert alert-warning limit-alert" v-if="hasErrorSaveLimit">
                            <strong>Oops!</strong> It seems we couldn't save this new limit.
                          </div>
                        </div>

                        <div class="mt-4">
                          <input
                            type="submit"
                            class="btn btn-link"
                            value="Save"
                            :disabled="!isLimitValid"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--end of col-->
    </div>
    <!--end of row-->
  </div>
</template>
<script>
// import MinutesPerDayChart from './minutesPerDayChart.vue';
import wretch from "wretch"

export default {
  name: 'CurrentPlan',
  props: {
    profileUrl: {
      type: String,
      required: true,
    },
    csrf: {
      type: String,
      required: true,
    },
    number_of_organizations: {
      type: String,
      required: true,
    },
    number_of_apps: {
      type: String,
      required: true,
    },
    user: {
      type: Object,
      required: true,
    },
    plan: {
      type: Object,
      required: true,
    },
    subscription: {
      type: Object,
      required: true,
    },
  },
  components: {
    // MinutesPerDayChart,
  },
  created() {
    if (Number(this.user.max_usage) > 0) {
      this.minuteLimit = 'limited';
      this.customLimit = this.userMaxUsage;
      this.limit = this.userMaxUsage;
    } else {
      this.minuteLimit = 'unlimited';
      this.customLimit = this.planMaxUsage;
      this.limit = 0;
    }
  },
  data() {
    return {
      minuteLimitType: '',
      limit: '',
      customLimitValue: '',
      limitSaveSuccessfully: false,
      hasErrorSaveLimit: false,
    };
  },
  computed: {
    userUsage() {
      return peermetrics.utils.secondsToMinutes(this.user.usage)
    },

    userMaxUsage() {
      return peermetrics.utils.secondsToMinutes(this.user.max_usage)
    },

    planMaxUsage() {
      return peermetrics.utils.secondsToMinutes(this.plan['max_usage'])
    },

    minuteLimit: {
      get() {
        return this.minuteLimitType;
      },
      set(value) {
        if(value === 'unlimited') {
          this.limit = 0;
        } else {
          this.limit = this.customLimitValue;
        }

        this.minuteLimitType = value;
      }
    },
    customLimit: {
      get() {
        return this.customLimitValue;
      },
      set(value) {
        if(this.minuteLimitType === 'limited') {
          this.limit = value;
        }

        this.customLimitValue = value;
      }
    },
    isLimitValid() {
      const isLimited = this.minuteLimit === 'limited';
      return !(isLimited  && this.limit < this.planMaxUsage);
    }
  },
  methods: {
    saveLimit() {
      // TODO: use api instead of web
      let data = new FormData();
      data.append('minute-limit', this.minuteLimit);
      data.append('limit', this.limit)

      wretch(window.location.origin + this.profileUrl)
        .headers({'X-CSRFToken': this.csrf})
        .formData({
          'minute-limit': this.minuteLimit,
          'limit': this.limit * 60
        })
        .post()
        .res(() => {
          this.limitSaveSuccessfully = true

          // hide notification after 5s
          setTimeout(() => {
            this.limitSaveSuccessfully = false
          }, 5000)
        })
        .catch(() => this.hasErrorSaveLimit = true)
    }
  }
};
</script>
