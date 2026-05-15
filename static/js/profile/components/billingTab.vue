<template>
  <div class="container">
    <CurrentPlan
      :profileUrl="profileUrl"
      :csrf="csrf"
      :user="user"
      :plan="plan"
      :subscription="subscription"
      :number_of_organizations="number_of_organizations"
      :number_of_apps="number_of_apps"
    />
    <PaymentForm  :subscription="subscription" />
  </div>
</template>
<script>
import CurrentPlan from './currentPlan.vue';
import PaymentForm from './paymentForm.vue';

export default {
  name: 'AccountDetails',
  components: {
    CurrentPlan,
    PaymentForm,
  },
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
};
</script>
