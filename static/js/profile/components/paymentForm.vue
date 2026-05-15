<template>
  <div>
    <div class="row mb-2 mt-4">
      <div class="col">
        <h2 class="h3">Payment Method</h2>
      </div>
      <!--end of col-->
    </div>
    <!--end of row-->
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-lg-8">
        <div
          class="alert alert-danger invalid-card"
          v-show="isInvalidCard"
        >
          <strong>Oops!</strong> There seems to be a problem with
          adding your card. Please try again and if the problem
          persists, please contact support.
        </div>
        <div class="card add-payment-method-card">
          <div class="card-body text-center">
            <h4 class="card-title">Want to save more events?</h4>
            <p>
              You can add a payment method and start saving more than
              the free quota.
            </p>
            <button
              class="btn btn-large btn-primary add-payment-method"
              @click="setShowForm()"
              v-if="!subscription['has_card_attached'] && !isAddCardActive"
            >
                Add a payment method
            </button>
            <a class="btn btn-primary"  :href="editCardUrl ? editCardUrl : 'javascript:void(0)'" v-if="subscription['has_card_attached'] && !isAddCardActive">Edit current card</a>
            <form
              id="payment-container-form"
              class="mt-3"
              v-show="isAddCardActive"
              @submit.prevent="savePaymentMethod()"
            >
              <div ref="card" class="MyCardElement"></div>
              <div
                id="card-errors"
                class="alert alert-danger"
                role="alert"
                v-show="hasCardErros"
              >
                {{ cardErrorMessage }}
              </div>

              <div class="text-right mt-3">
                <button
                  class="btn btn-primary add-card"
                  :disabled="!isEventCompleted"
                >
                  Add card
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!--end of col-->
    </div>
    <!--end of row-->
    <div class="row mb-2 mt-4">
      <div class="col">
        <h2 class="h3">Billing history</h2>
      </div>
      <!--end of col-->
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-lg-8">
        <div class="card ">
          <div class="card-body text-center ">
            <p>
             View your billing history using stripe's customer portal
            </p>
            <a class="btn btn-primary" :href="editCardUrl ? editCardUrl : 'javascript:void(0)'">View Billing History</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
let stripe = Stripe(peermetrics.profile.stripe_key),
  elements = stripe.elements(),
  card = undefined,
  cardElement;

import EventBus from '../../eventBus'

export default {
  name: 'PaymentForm',
  props: {
    subscription: {
      type: Object,
      required: true,
    },
  },
  created() {
    // TODO: get link for customer portal
    peermetrics.get(peermetrics.urls['customer-portal']).then(res => {
      this.editCardUrl = res.url
    }).catch(e => console.log(e))

  },
  mounted() {
    let style = {
      base: {
        color: '#32325d',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    };

    cardElement = elements.create('card', { style: style });
    cardElement.mount(this.$refs.card);
    cardElement.addEventListener('change', event => {
      this.setCardErrors(event);
      this.setEventComplete(event);
    });
  },
  beforeDestroy() {
    cardElement.removeEventListener('change', event => {
      this.setCardErrors(event);
      this.setEventComplete(event);
    });
  },
  data() {
    return {
      isInvalidCard: false,
      hasCardErros: false,
      cardErrorMessage: '',
      isEventCompleted: false,
      isAddCardActive: false,
      editCardUrl: '',
    };
  },
  methods: {
    setShowForm() {
      this.isAddCardActive = true;
    },
    setCardErrors(event) {
      if (event.error) {
        this.hasCardErros = true;
        this.cardErrorMessage = event.error.message;
      } else {
        this.hasCardErros = false;
        this.cardErrorMessage = '';
      }
    },
    setEventComplete(event) {
      if (event.complete === true) {
        this.isEventCompleted = true;
      }
    },
    savePaymentMethod() {
      return stripe
        .createPaymentMethod({
          type: 'card',
          card: cardElement,
        })
        .then(result => {
          if (result.error) {
            this.isInvalidCard = true;
          } else {
            EventBus.$emit('changeData', {field: 'subscription', data: {has_card_attached: true}});
            this.isAddCardActive = false;
            this.isEventCompleted = true;

            peermetrics
              .post(peermetrics.urls.paymentMethod, {
                paymentMethodId: result.paymentMethod.id,
              })
              .then(res => {
                // Handling errors in backend (see https://stripe.com/docs/api/errors)
                console.log(res);
              });
          }
        }).catch( () => {
          this.isInvalidCard = true;
        })
    },
  },
};
</script>
