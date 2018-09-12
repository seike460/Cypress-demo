// 清家史郎存在チェック
describe('清家史郎削除されてない？', function() {
  it('Visit Fusic', function() {

    // Fusic サイトを開く
    cy.visit('https://fusic.co.jp/')

    // 対象のエレメントを取得して、Clickして遷移
    cy.get('.staff_box')
      .click()

    // HTML内に清家史郎が含まれるかをチェック
    cy.contains("清家 史郎")
  })
})
