<template>
  <InstitutionalLayout
    no-intro
    :header="$t('exante.pages.partner.intro.header')"
  >
    <UnderHeader>
      <Container>
        <h1>EXANTE Promotion Guidelines</h1>
        <p>
          The EXANTE Partnership Team wants to&nbsp;help you promote EXANTE
          in&nbsp;the most efficient way, while maintaining the reputation
          of&nbsp;the EXANTE brand.
        </p>
        <p>
          Here are some quick guidelines and policies we&nbsp;have outlined
          to&nbsp;help both sides achieve this objective.
        </p>
        <h2>“Do&rsquo;s”</h2>
        <ul>
          <li>
            Read the Terms of&nbsp;your Partnership Agreement clearly,
            to&nbsp;ensure you understand what types of&nbsp;promotion are
            prohibited or&nbsp;are deemed inappropriate.
          </li>
          <li>
            Always use approved logos in&nbsp;promotional materials. You can
            find them here:
            <a href="https://exante.eu/press/for-press/">
              https://exante.eu/press/for-press/
            </a>
          </li>
          <li>
            Have marketing materials that you create approved by&nbsp;the EXANTE
            Partnership Team. Sometimes promotional banners and other tools may
            harm the brand and cause more damage than good.
          </li>
          <li>
            Feel free to&nbsp;contact&nbsp;us for advice when planning your
            campaigns. You can reach&nbsp;us at&nbsp;partners@exante.eu
          </li>
          <li>
            Request different reviews and content available from the partners
            department, to&nbsp;get ideas and direction for the content you wish
            to&nbsp;use in&nbsp;your campaigns. Remember to&nbsp;write your own
            unique content according to&nbsp;our Branding &amp;&nbsp;Messaging
            Guidelines. This is&nbsp;important so&nbsp;that the EXANTE brand can
            have one voice and clear messaging.
          </li>
          <li>
            When you choose to&nbsp;mention EXANTE by&nbsp;name, always write
            EXANTE, and not Exante or&nbsp;exante.
          </li>
          <li>
            Remember that content is&nbsp;king! Sticking to&nbsp;EXANTE&rsquo;s
            strengths, especially mentioning localised benefits, our intuitive
            platform, exemplary customer support and service, professional
            trading features and vast array of&nbsp;assets, can really
            strengthen a&nbsp;campaign in&nbsp;attracting new traders.
          </li>
          <li>
            If&nbsp;you are ever in&nbsp;doubt about what
            is&nbsp;or&nbsp;is&nbsp;not appropriate when promoting EXANTE,
            always contact&nbsp;us for guidance.
          </li>
        </ul>
        <h2>“Don&rsquo;ts”</h2>
        <ul>
          <li>
            Do&nbsp;not promote or&nbsp;represent yourself
            as&nbsp;an&nbsp;internal EXANTE employee. It&nbsp;is&nbsp;important
            that clients understand you are promoting EXANTE&rsquo;s products
            and services in&nbsp;a&nbsp;professional marketing capacity.
          </li>
          <li>
            It&nbsp;is&nbsp;prohibited to&nbsp;use EXANTE&rsquo;s trademark
            as&nbsp;a&nbsp;key word in&nbsp;paid ads services, such
            as&nbsp;Google Ad&nbsp;words etc. Using the brand&rsquo;s
            TM&nbsp;as&nbsp;a&nbsp;keyword is&nbsp;solely permitted for
            EXANTE&rsquo;s purposes only.
          </li>
          <li>
            If&nbsp;you use a&nbsp;social media platform, LinkedIn page
            or&nbsp;otherwise, your profile picture should not include the
            EXANTE logo or&nbsp;name.
          </li>
          <li>
            If&nbsp;you choose to&nbsp;promote your page with paid advertising
            options (i.e. Facebook ads), you cannot mention the EXANTE name
            within the ad&nbsp;description or&nbsp;use the logo within the
            creative. Also, each of&nbsp;the ads can only direct users
            to&nbsp;the page you have created&nbsp;OR to&nbsp;an&nbsp;external
            URL of&nbsp;your choice (i.e. your site).
          </li>
          <li>
            Do&nbsp;not engage in&nbsp;any kind of&nbsp;promotion
            or&nbsp;arrangement for payment or&nbsp;portion of&nbsp;the
            Partner&rsquo;s Fee, or&nbsp;any other incentive which may
            be&nbsp;considered to&nbsp;be&nbsp;a&nbsp;fee sharing arrangement,
            rebate compensation between the Partner and any person. This type
            of&nbsp;promotion is&nbsp;prohibited under the EXANTE brand.
          </li>
          <li>
            Do&nbsp;not SPAM or&nbsp;use any aggressive advertising
            or&nbsp;marketing methods that could harm the brand.
          </li>
          <li>
            Do&nbsp;not promote the EXANTE brand via an&nbsp;illegal business,
            website or&nbsp;subscription email list or&nbsp;use unsolicited
            promotions.
          </li>
          <li>
            Do&nbsp;not actively defame the EXANTE brand. In&nbsp;the unlikely
            event you experience a&nbsp;problem with our services,
            contact&nbsp;us directly to&nbsp;find a&nbsp;resolution to&nbsp;your
            problem.
          </li>
          <li>
            Refer members of&nbsp;your household to&nbsp;EXANTE, as&nbsp;they
            will not be&nbsp;counted as&nbsp;qualified referrals.
          </li>
        </ul>
        <p>
          Please note that a&nbsp;failure to&nbsp;comply with the above
          guidelines may be&nbsp;regarded as&nbsp;a&nbsp;breach of&nbsp;your
          Partnership Agreement, therefore please consider your promotional
          activities carefully.
        </p>
        <p>
          <b>Please note,</b> as&nbsp;a&nbsp;policy, we&nbsp;do&nbsp;not
          reassign leads, therefore, it&nbsp;is&nbsp;the partner&rsquo;s
          responsibility to&nbsp;ensure their client uses their referral link,
          found in&nbsp;the partner dashboard, in&nbsp;order
          to&nbsp;be&nbsp;credited for the referral.
        </p>
      </Container>
    </UnderHeader>
    <template #textoac><VVoid></VVoid></template>
    <template #customer_care><VVoid></VVoid></template>
    <template #footer_wrap>
      <Created
        :open-account-text="$t('exante.globals.open_account.referral')"
        :no-privacy="true"
      ></Created>
      <!-- <FooterSiteShort :copyrights="$t('partners.copyrights')" /> -->
    </template>
  </InstitutionalLayout>
</template>

<script>
import InstitutionalLayout from '~/components/layouts/Institutional.vue'
import Created from '~/components/exante/created/Created.vue'
import VVoid from '~/utils/VVoid'
import Container from '~/components/general/Container.vue'
import UnderHeader from '~/components/general/UnderHeader/UnderHeader.vue'

export default {
  name: 'Partner',
  components: {
    InstitutionalLayout,
    Created,
    VVoid,
    Container,
    UnderHeader
  }
}
</script>

<style scoped>
h1 {
  margin-top: 0.67em;
}
</style>
