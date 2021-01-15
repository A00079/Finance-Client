<template>
  <vsm-menu
    :menu="menu"
    :base-width="380"
    :base-height="400"
    :screen-offset="10"
    element="header"
    handler="hover"
    @open-dropdown="onOpenDropdown"
    @close-dropdown="onCloseDropdown"
  >
    <template #default="{ item }">
      <div class="wrap-content">
        <div class="wrap-content__block">Header: {{ item.title }}</div>
        <div class="wrap-content__item">
          {{ item.content }}
        </div>
      </div>
    </template>
    <template #before-nav>
      <!--Image or svg of website logo-->
      <li class="vsm-section logo-section">
        <img src="https://vuejs.org/images/logo.png" alt="My Logo" />
      </li>
    </template>
    <template #title="data">
      <!--Display menu items through slots-->
      {{ data.item.title }}
    </template>
    <template #after-nav>
      <!--Mobile Burger, buttons, etc-->
      <!--For the same styles - add the vsm-section-->

      <!--Display when user media screen below from $vsm-media (scss)-->
      <vsm-mob>
        <div>
          Mobile Content
        </div>
        <div>
          Mobile Content
        </div>
        <div>
          Mobile Content
        </div>
        <div>
          Mobile Content
        </div>
        <div>
          Mobile Content
        </div>
        <div>
          Mobile Content
        </div>
      </vsm-mob>
    </template>
  </vsm-menu>
</template>
<script>
export default {
  name: "PrimaryNav",
  data() {
    return {
      menu: [
        {
          // display menu item (or override title slot)
          title: "loans",
          // now this is not a link, but a menu item where there is a dropdown
          dropdown: "loans",
          content: "this is loans section",

          // don't want a button element?
          // element: "span",
          // menu item can accept all attributes
          attributes: {
            // I want more classes! No problem
            // string, array, object, not matter
            // Custom attributes
            "data-big": "yes",
          },
          // add some events?
          listeners: {
            // all possible native events
            mouseover: (evt) => {
              console.log("news hover", evt);
            },
          },
          // just extra properties in the object
          new_section: false,
        },
        {
          // display menu item (or override title slot)
          title: "cards",
          // now this is not a link, but a menu item where there is a dropdown
          dropdown: "cards",
          content: "this is cards section",
          // don't want a button element?
          element: "span",
          // menu item can accept all attributes
          attributes: {
            // I want more classes! No problem
            // string, array, object, not matter
            class: ["my-class1", { "my-class2": true }],
            // Custom attributes
            "data-big": "yes",
          },
          // add some events?
          listeners: {
            // all possible native events
            mouseover: (evt) => {
              console.log("news hover", evt);
            },
          },
          // just extra properties in the object
          new_section: false,
        },

        // ...
      ],
    };
  },
  methods: {
    onOpenDropdown() {
      console.log("onOpenDropdown");
    },
    onCloseDropdown() {
      console.log("onCloseDropdown");
    },
  },
};
</script>
<style lang="scss">
// Styles, to quickly start using the component
// You can delete, change or add your own

// Limit the width to 1024px and center
.vsm-menu {
  margin: 10px;
  background-color: rgb(61, 194, 68);
  ul {
    max-width: 1024px;
    margin: 0 auto;
  }
}

// Let's simplify the work with menu items (logo, menu, buttons, etc)
.vsm-root {
  display: flex;
  align-items: center;
  justify-content: center;
}

// Move all the content to the right and reduce the logo
.logo-section {
  flex: 1 1 auto;
  img {
    user-select: none;
    max-width: 40px;
  }
}

// All menu items (element props: a, button, span, etc) are
// made the same in style
.vsm-section_menu {
  > * {
    padding: 0 25px;
    font-weight: 500;
    font-family: inherit;
  }
}

// Styles for Dropdown Content:
.wrap-content {
  padding: 30px;
  // Set the width manually so that it does not depend
  // on changing content
  width: 300px;
}
.wrap-content__block {
  font-weight: bold;
}
.wrap-content__item {
  font-style: italic;
  margin-top: 1rem;
  font-size: 0.8rem;
}
</style>
